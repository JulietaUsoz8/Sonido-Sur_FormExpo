
import { useForm} from 'react-hook-form';
import { StyleSheet, Text, View, Controller, form } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function TicketConfirmation({nombre, email, telefono, datos, onVolver}){

    const email = await AsyncStorage.getItem("ultimoEmail");


  
    return(
        <View>
            <Text>Entrada registrada para :</Text>
                <Text>Email:</Text>
            <form>        
                <button onProgress={() => onVolver()}> Inscribe otra persona</button>
            </form>
        </View>
);

}