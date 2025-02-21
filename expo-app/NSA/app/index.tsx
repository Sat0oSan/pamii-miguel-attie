import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.conteiner}>
      <View style={styles.OnUI}>
      <Text style={styles.text}>NSA Interface</Text>
      </View>
    </View>
  );
}

    const styles = StyleSheet.create({
      conteiner: {
        backgroundColor: '#2c2c2c',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        
      },
    OnUI: {
        backgroundColor: 'white',
        height: '200px',
        width: '350px',
      },
      text: {
        color: 'white',
        fontSize: '30px',
      }
    })

