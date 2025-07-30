import { StyleSheet, View } from 'react-native';
import { StartGameScreen } from './screens/StartGameScreen';
import * as SystemUI from 'expo-system-ui';

SystemUI.setBackgroundColorAsync("#D1B536FF");

export default function App() {
  return (
    <View style={styles.container}>
      <StartGameScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
