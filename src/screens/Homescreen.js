import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Homescreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>ESTA ES MI PAGINA DE HOME</Text>
      <Text style={styles.texto}>AGREGANDO MAS TEXTO</Text>
      <StatusBar style="auto" />
      <Image
          style={styles.image}
          source={require("../../assets/Sun.png")}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#61A4BC',
    alignItems: 'center',
    justifyContent: 'center',    
  },
  texto:{
    color:'#fff',
    fontSize:25,
    margin:10,      
  },
  image:{
    width:'100', 
    height:'100',
    marginBottom: 15,
  }
});
