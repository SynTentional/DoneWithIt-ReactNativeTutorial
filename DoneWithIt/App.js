import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, Image, SafeAreaView, TouchableNativeFeedback } from 'react-native';

export default function App() {
  return (
    console.log("App executed"),


    // View -> AndroidView
    <SafeAreaView style={styles.container}>
      <Text>Hello React Native!</Text>
      <TouchableNativeFeedback onPress={() => console.log('Image tapped')}>
        <View style={{ width: 200, height: 70, backgroundColor: "dodgerblue"}}></View> 
      </TouchableNativeFeedback> 
      
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
