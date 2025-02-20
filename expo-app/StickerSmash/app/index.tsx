import { Text, View, StyleSheet } from 'react-native';

export default function Index() {
  return (
    <View style={styles.conteiner}>
      <Text style={styles.text}>Edit app/index.tsx to edit this screen.</Text>
    </View>
  )}

    const styles = StyleSheet.create({
      conteiner: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
        justifyContent: 'center',
      },
      text: {
        color: 'white',
      },
    });

