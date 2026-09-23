import { useState } from "react";

function InscripcionScreen() {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [Enviado, setEnviado] = useState(false);

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
                Enviado = {Enviado}
                setEnviado = {setEnviado}
            />
):(
            <TicketConfirmacion
                nombre={nombre}
                email={email}
                telefono={telefono}


                      datos={formulario}
                    onVolver={limpiarFormulario}
            />
        
        )}
        </View>
    );
}