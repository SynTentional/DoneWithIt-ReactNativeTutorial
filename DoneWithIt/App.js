import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    console.log("App executed"),


    // View -> AndroidView
    <SafeAreaView style={styles.container}>
      <Text>Hello React Native!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //Means take up as much space as you can
    backgroundColor: 'dodgerblue', // Can use named colors or RGB colors as well
    alignItems: 'center',
    justifyContent: 'center',
  },
});
