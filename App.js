import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Form from './src/Form';
import TicketConfirmation from './src/TicketConfirmation';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
            <Stack.Screen name="Form" component={Form} ></Stack.Screen>
           <Stack.Screen name="TicketConfirmation" component={TicketConfirmation} ></Stack.Screen>


      </Stack.Navigator>


    </NavigationContainer>
  );
}


//mostrar ticket y form
//evitar perder los datos si se recarga --> en duda
//form:nombre(3 caracteres), email(@ y dom), edad(entr 12 y 99), tipo entrada(general o vip), telefono
//react hook form(useForm, controller, rules) y usar KeyBoardAvoidingView
//Con el form completado se meustra un ticker con los datos
//plus: AsyncStorage y/o loading simulado implementados correctamente.