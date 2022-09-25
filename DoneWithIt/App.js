import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, Image, SafeAreaView, TouchableNativeFeedback, Button, Alert, Platform, Dimensions} from 'react-native';

export default function App() {
  console.log(Dimensions.get("screen"));
  return (
    // View -> AndroidView
    // SafeAreaView -> Only works on iOS
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor: "dodgerblue",
        width: '50%',
        height: 70,
      }}>

      </View>
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "orange", flex: 1, justifyContent: "center", alignItems: "center" };

const styles = StyleSheet.create({
  container: {
    flex: 1, //Means take up as much space as you can
    backgroundColor: '#ffff', // Can use named colors or RGB colors as well
    alignItems: 'center',
    justifyContent: 'center',
  },
});
