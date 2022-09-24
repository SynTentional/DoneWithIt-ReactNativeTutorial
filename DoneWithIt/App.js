import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

export default function App() {
  return (
    console.log("App executed"),


    // View -> AndroidView
    <SafeAreaView style={styles.container}>
      <Text>Hello React Native!</Text> 
      <Image source={{ 
        width: 200,
        height: 300,
        uri: "https://picsum.photos/200/300" }}/> 
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //Means take up as much space as you can
    backgroundColor: '#ffff', // Can use named colors or RGB colors as well
    alignItems: 'center',
    justifyContent: 'center',
  },
});
