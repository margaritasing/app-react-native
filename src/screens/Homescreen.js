import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Homescreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>ESTA ES MI PAGINA DE HOME</Text>
      <Text style={styles.texto}>AGREGANDO MAS TEXTO</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF6EA',
    alignItems: 'center',
    justifyContent: 'center',    
  },
  texto:{
    color:'#4700D8',
    fontSize:25,
    margin:10,   
    
  }
});
