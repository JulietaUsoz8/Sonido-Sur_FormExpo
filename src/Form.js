import { useForm, Controller } from 'react-hook-form';
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
        <View style={styles.container}>

            {/* NOMBRE */}
            <Text>Nombre</Text>

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


            {/* EDAD */}
            <Text>Edad</Text>

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


            {/* EMAIL */}
            <Text>Email</Text>

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


            {/* TELEFONO */}
            <Text>Teléfono</Text>

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


            {/* TIPO DE ENTRADA */}
            <Text>Tipo de entrada</Text>

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


            {segundos >= 3 &&(
            <Pressable
                style={styles.button}
                onPress={handleSubmit(Entrada)}
            >
                <Text style={styles.buttonText}>
                    Enviar
                </Text>
            </Pressable>
): (<Loading_2></Loading_2>)}
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        padding: 20,
        gap: 5
    },

    input: {
        borderWidth: 1,
        borderColor: "#999",
        borderRadius: 8,
        padding: 10,
        marginBottom: 5
    },

    inputError: {
        borderColor: "red",
        borderWidth: 2
    },

    error: {
        color: "red",
        marginBottom: 10
    },

    button: {
        backgroundColor: "#222",
        padding: 15,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 15
    },

    buttonText: {
        color: "white",
        fontWeight: "bold"
    }
});