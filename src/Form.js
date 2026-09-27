import { useForm, Controller } from 'react-hook-form';
import { LinearGradient } from 'expo-linear-gradient';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Pressable
} from 'react-native';
import { useState, useEffect } from "react";
import Loading_2 from "../assets/Loading_2.gif"
export default function Form({
    nombre,
    setNombre,
    telefono,
    setTelefono,
    email,
    setEmail,
    setEnviado
}) {
     const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSegundos((prev) => prev + 1);
    }, 1000); // 1000 milisegundos = 1 segundo

    // Limpiamos el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalo);
  }, []);

  // Condición para saber si ya pasó al menos un segundo
  const pasoUnSegundo = segundos >= 1;
/////////////////////////////////////////
    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: {
            nombre: nombre,
            edad: "",
            email: email,
            telefono: telefono,
            tipoEntrada: ""
        }
    });

    const Entrada = (datos) => {

        setNombre(datos.nombre);
        setTelefono(datos.telefono);
        setEmail(datos.email);

        setEnviado(true);
    };

    return (
   <LinearGradient
       colors={["#142030", "#1E3442", "#FF5C8D"]}
       locations={[0, 0.65, 1]}
       style={styles.container}
   > 

            <Text style={styles.text}>Nombre</Text>
            <Controller
                control={control}
                name="nombre"
                rules={{
                    required: "Ingrese su nombre",
                    minLength: {
                        value: 3,
                        message: "Mínimo 3 caracteres"
                    }
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={[
                            styles.input,
                            errors.nombre && styles.inputError
                        ]}
                        placeholder="Ingrese su nombre"
                        placeholderTextColor="#85A3B2"
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                    />
                )}
            />

            {errors.nombre && (
                <Text style={styles.error}>
                    {errors.nombre.message}
                </Text>
            )}


            <Text style={styles.text}>Edad</Text>
            <Controller
                control={control}
                name="edad"
                rules={{
                    required: "Ingrese su edad",
                    min: {
                        value: 8,
                        message: "Debe ser mayor de 18 años"
                    },
                    max: {
                        value: 99,
                        message: "Ingrese una edad válida"
                    }
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={[
                            styles.input,
                            errors.edad && styles.inputError
                        ]}
                        placeholder="Ingrese su edad"
                        placeholderTextColor="#85A3B2"
                        keyboardType="numeric"
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                    />
                )}
            />

            {errors.edad && (
                <Text style={styles.error}>
                    {errors.edad.message}
                </Text>
            )}


            <Text style={styles.text}>Email</Text>
            <Controller
                control={control}
                name="email"
                rules={{
                    required: "Ingrese su email",
                    pattern: {
                        value: /^[^\s@]+@gmail\.com$/,
                        message: "Debe utilizar un email @gmail.com"
                    }
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={[
                            styles.input,
                            errors.email && styles.inputError
                        ]}
                        placeholder="ejemplo@gmail.com"
                        placeholderTextColor="#85A3B2"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                    />
                )}
            />

            {errors.email && (
                <Text style={styles.error}>
                    {errors.email.message}
                </Text>
            )}


            <Text style={styles.text}>Teléfono</Text>
            <Controller
                control={control}
                name="telefono"
                rules={{
                    required: "Ingrese su número de teléfono",
                    pattern: {
                        value: /^[0-9]+$/,
                        message: "El teléfono debe contener solamente números"
                    }
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={[
                            styles.input,
                            errors.telefono && styles.inputError
                        ]}
                        placeholder="Ingrese su teléfono"
                        placeholderTextColor="#85A3B2"
                        keyboardType="numeric"
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                    />
                )}
            />

            {errors.telefono && (
                <Text style={styles.error}>
                    {errors.telefono.message}
                </Text>
            )}


            <Text style={styles.text}>Tipo de entrada</Text>
            <Controller
                control={control}
                name="tipoEntrada"
                rules={{
                    required: "Elija un tipo de entrada"
                }}
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        style={[
                            styles.input,
                            errors.tipoEntrada && styles.inputError
                        ]}
                        placeholder="General / VIP"
                        placeholderTextColor="#85A3B2"
                        value={value}
                        onChangeText={onChange}
                    />
                )}
            />

            {errors.tipoEntrada && (
                <Text style={styles.error}>
                    {errors.tipoEntrada.message}
                </Text>
            )}


 {segundos >= 3 ? (
    <Pressable
        style={styles.button}
        onPress={handleSubmit(Entrada)}
    >
        <Text style={styles.buttonText}>
            Enviar
        </Text>
    </Pressable>
) : (
<img
    src={Loading_2}
    style={{
        width: 80,
        height: 80
    }}
/>)}
        </LinearGradient>
    );
}

const styles = StyleSheet.create({ 
    container: 
    { 
        flex: 1, backgroundColor: "#142030",
     paddingHorizontal: 24,
      paddingVertical: 28, 
      gap: 6 
    }, 
      input: { 
        backgroundColor: "#1E3442", 
        borderWidth: 1, borderColor: "#85A3B2", 
        borderRadius: 12, 
        paddingHorizontal: 16, 
        paddingVertical: 13,
         marginBottom: 8,
          color: "#E9D8C8", 
          fontSize: 16
         }, 
    inputError: { 
            borderColor: "#FF5C8D", 
            borderWidth: 2
         }, 
     error: {
                 color: "#FF5C8D", 
                 fontSize: 13, 
                 fontWeight: "600", 
                 marginTop: -4, 
                 marginBottom: 8 
            }, 
        button: { 
            backgroundColor: "#732553", 
            paddingVertical: 16, borderRadius: 12, 
            alignItems: "center", 
            justifyContent: "center", 
            marginTop: 18, 
            borderWidth: 1, 
            borderColor: "#FF5C8D", 
            elevation: 4 
        }, 
        buttonText: 
        { 
            color: "#E9D8C8", 
            fontSize: 16, 
            fontWeight: "bold", 
            letterSpacing: 0.5 } ,
        text:{
                  color: "#E9D8C8", 
            }
        });