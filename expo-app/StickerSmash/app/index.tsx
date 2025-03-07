import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Link href={'/about'} style={styles.button}>Ir para a tela Sobre</Link>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: '#25292e',
      flex: 1, 
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: '#fff'
    },
    button:{
      fontSize: 20,
      color: '#fff',
      textDecorationLine: 'underline',
    }
})