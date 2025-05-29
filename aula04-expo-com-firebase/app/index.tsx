import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "FIREBASE_API_KEY",
  authDomain: "AUTH_DOMAIN",
  projectId: "PROJECT_ID",
  storageBucket: "STORAGE_BUCKET",
  messagingSenderId: "MESSAGING_SENDER_ID",
  appId: "APP_ID",
};

firebase.initializeApp(firebaseConfig);


import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#0d730d',
    fontSize: 16,
    fontFamily: 'Arial',
  },
  subtitle: {
    color: '#0d730d',
    fontSize: 12,
    fontFamily: 'Arial',
  }
});


export default function Index() {
  const [nomes, setNomes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const nomesList = firebase.firestore().collection("Nomes");
      const snapshot = await nomesList.get();

      const data = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });

      setNomes(data);
    };
      fetchData();
    }, []);

  return (
      <View style={styles.container}>
      <Text style={styles.title}>LISTA DE NOMES: </Text>
      <Flatlist
        data={Nomes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <view>
            <Text style={styles.subtitle}> {item.Nome} {item.Sobrenome}</Text>
          </view>
        )}
      />
      </View>
  );
}
