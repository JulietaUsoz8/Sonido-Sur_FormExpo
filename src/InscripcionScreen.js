import { useState } from "react";

function InscripcionScreen() {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [Enviado, onEnviado] = useState(false);

    const formularioInicial = {
        nombre: "",
        email: "",
        telefono: ""
    };

    const [formulario, setFormulario] = useState(formularioInicial);

        const limpiarFormulario = () => {
        setFormulario(formularioInicial);
        setEnviado(false);
    };

    await AsyncStorage.setItem(
    "ultimoEmail",
    formulario.email
);

    return (
        <View>
      {!Enviado ?  (
        
            <Formulario
                nombre={nombre}
                setNombre={setNombre}
                email={email}
                setEmail={setEmail}
                telefono={telefono}
                setTelefono={setTelefono}
                onEnviado = {onEnviado}
            />
):(
            <TicketConfirmacion
                nombre={nombre}
                email={email}
                telefono={telefono}


                      datos={Enviar}
                    onVolver={limpiarFormulario}
            />
        
        )}
        </View>
    );
}