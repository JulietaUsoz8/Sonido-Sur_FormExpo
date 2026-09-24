import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import InscripcionScreen from './src/InscripcionScreen';




export default function App() {
  return (
    <InscripcionScreen></InscripcionScreen>
  );
}


//mostrar ticket y form
//evitar perder los datos si se recarga --> en duda
//form:nombre(3 caracteres), email(@ y dom), edad(entr 12 y 99), tipo entrada(general o vip), telefono
//react hook form(useForm, controller, rules) y usar KeyBoardAvoidingView
//Con el form completado se meustra un ticker con los datos
//plus: AsyncStorage y/o loading simulado implementados correctamente.