import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, Image, SafeAreaView, TouchableNativeFeedback, Button, Alert } from 'react-native';

export default function App() {
  return (
    // View -> AndroidView
    <SafeAreaView style={styles.container}>
      <Button 
        color="orange"
        title="Click Me" 
        onPress={() => Alert.alert('My title', "My message", [
          {text: "Yes", onPress: () => console.log("Yes")},
          {text: "No", onPress: () => console.log("No") },
        ])
        }
        >
      </Button>
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
