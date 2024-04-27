// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import TodoScreen from './src/screen/TodoScreen';
import { PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
        <View style={{ marginTop: 30 }}>
          <TodoScreen />
        </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
});
