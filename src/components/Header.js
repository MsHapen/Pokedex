import { Text, View, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>LOL!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'purple',
    paddingTop: 30,
    width: '100%',
    alignContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 40,
  },
})