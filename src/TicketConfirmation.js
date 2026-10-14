
//import { useForm} from 'react-hook-form';
import { StyleSheet, Text, View,  form, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Controller } from "react-hook-form";
import { LinearGradient } from 'expo-linear-gradient';


export default function TicketConfirmation({nombre, email, telefono, onVolver}){

   // const email = await AsyncStorage.getItem("ultimoEmail");

    return(
<LinearGradient
    colors={["#142030", "#1E3442", "#FF5C8D"]}
    locations={[0, 0.65, 1]}
    style={styles.container}
>       <Text style={styles.title}> 
        Entrada registrada para:
       </Text> 
      <View style={styles.dataContainer}> 
        <Text style={styles.data}>
           Nombre: {nombre} 
        </Text> 
      <Text style={styles.data}> 
        Email: {email} 
      </Text>
     <Text style={styles.data}> 
      Teléfono: {telefono} 
      </Text> 
      </View> 
      <Pressable style={styles.button} onPress={onVolver} >
         <Text style={styles.buttonText}> Inscribe otra persona </Text> 
      </Pressable> </LinearGradient> ); } 
      const styles = StyleSheet.create({ 
        container: { flex: 1, backgroundColor: "#142030", 
        paddingHorizontal: 24, 
        paddingVertical: 28, 
        justifyContent: "center" }, 
        title: { color: "#E9D8C8",
           fontSize: 24, 
           fontWeight: "bold", 
           marginBottom: 24, 
           textAlign: "center" }, 
           dataContainer: { 
            borderWidth: 1, 
            borderColor: "#85A3B2", 
            borderRadius: 12, 
            padding: 20, 
            marginBottom: 24 }, 
            data: { 
              color: "#E9D8C8", 
              fontSize: 16,
               marginBottom: 12 },
                button: { backgroundColor: "#732553", 
                  borderWidth: 1, 
                  borderColor: "#FF5C8D", 
                  borderRadius: 12, 
                  paddingVertical: 16, 
                  alignItems: "center", 
                  justifyContent: "center" },
                   buttonText: { 
                    color: "#E9D8C8", 
                    fontSize: 16, 
                    fontWeight: "bold", 
                    letterSpacing: 0.4 } });