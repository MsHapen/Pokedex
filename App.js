import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import Header from './src/components/Header';



export default function App() {
    const pokemon = [
      {
        arte: "",
        nome: "",
        numero: "",
      }
    ]
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 0,

  },
  headerText: {
    color: 'purple',
    fontSize: 90,
    paddingTop: 90,
  },
});
