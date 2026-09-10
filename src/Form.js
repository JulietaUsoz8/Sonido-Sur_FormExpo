import { useForm} from 'react-hook-form';
import { StyleSheet, Text, View, Controller, form } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function Form(){
    const navigation = useNavigation();
    const{control, handleSubmit, formState: {errors},} = useForm();


    
        const Entrada = () => {
        navigation.navigate("TicketValidation", {
        //la ifno a pasar
        });
        };
return(
    <form onSubmit = {handleSubmit(onSubmit)}>


        <Controller
            control = {control}
            name = "name"
            rules ={{

                requiered: 'ingrese su nombre',
                minLength: {value: 3, massage : 'Minimo 3 caracteres'},
            }}
        />
        <Controller
            control = {control}
            name = "edad"
            rules = {{
                required: 'ingrese su edad',
                //entre 9 y 12
                min: 8, max: 99,
            }}
        />
       <Controller
            control = {control}
            name = "email"
            rules = {{
                required: 'ingrese su email',
                //contar con @gmail.com
                pattern: '@gmail.com',
            }}
        />
       <Controller
            control = {control}
            name = "Telefono"
            rules = {{
                required: 'ingrese su numero de Telefono',
                //contar con solo numeros
                
            }}
        />
          <Controller
            control = {control}
            name = "TipoEntrada"
            rules = {{
                required: 'eleija el tipo de entrada',
                //si o si

            }}
        />

        <button type="submit" onProgress={() => Entrada()}> Enviar</button>
    </form>

        );
    }
    
//https://react-hook-form.com/docs/useform