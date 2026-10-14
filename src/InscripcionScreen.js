import { useState } from "react";
//import { useForm} from 'react-hook-form';
import { StyleSheet, Text, View, form } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Form from './Form'
import TicketConfirmation from './TicketConfirmation'
import { Controller } from "react-hook-form";

function InscripcionScreen() {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [enviado, setEnviado] = useState(false);
    const formularioInicial = {
        nombre: "",
        email: "",
        telefono: ""
    };

    const [formulario, setFormulario] = useState(formularioInicial);

    const limpiarFormulario = () => {
        setFormulario(formularioInicial);
        setEmail(" ");
        setTelefono(" ");
        setNombre(" ");
        setEnviado(false);
    };

    
  useEffect(() => {
        const cargarEmail = async () => {
            try {
                const emailGuardado =
                    await AsyncStorage.getItem("ultimoEmail");

                if (emailGuardado !== null) {
                    setEmail(emailGuardado);
                }
            } catch (error) {
                console.log("Error al recuperar el email");
            }
        };

        cargarEmail();
    }, []);
   const guardarEmail = async () => {
        try {
            await AsyncStorage.setItem("ultimoEmail", email);
        } catch (error) {
            console.log("Error al guardar el email");
        }
    };

    const handleEnviar = async () => {
        await guardarEmail();
        setEnviado(true);
    };
    
    return (
        <View>
            {!enviado ? (

                <Form
                    nombre={nombre}
                    setNombre={setNombre}
                    email={email}
                    setEmail={setEmail}
                    telefono={telefono}
                    setTelefono={setTelefono}
                    onEnviar={handleEnviar}
                />
            ) : (
                <TicketConfirmation
                    nombre={nombre}
                    email={email}
                    telefono={telefono}

                    onVolver={limpiarFormulario}
                />

            )}
        </View>
    );
}

export default InscripcionScreen;