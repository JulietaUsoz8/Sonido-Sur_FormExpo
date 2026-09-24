
//import { useForm} from 'react-hook-form';
import { StyleSheet, Text, View,  form, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Controller } from "react-hook-form";

export default function TicketConfirmation({nombre, email, telefono, onVolver}){

   // const email = await AsyncStorage.getItem("ultimoEmail");

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('my_key');
    if (value !== null) {
      // Data previously stored
    }
  } catch(e) {
    // Error reading error
  }
};
  
    return(
        <View>
           
            <Text>Entrada registrada para:</Text>

            <Text>
                Nombre: {nombre}
            </Text>

            <Text>
                Email: {email}
            </Text>

            <Text>
                Teléfono: {telefono}
            </Text>

            <Pressable onPress={onVolver}>
                <Text>Inscribe otra persona</Text>
            </Pressable>
        </View>
);

}