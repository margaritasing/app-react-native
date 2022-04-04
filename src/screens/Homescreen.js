import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Homescreen() {
  return (
    <View style={styles.container}>
      <Text>ESTA ES MI PAGINA DE HOME</Text>
      <Text>AGREGANDO MAS TEXTO</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F900BF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
