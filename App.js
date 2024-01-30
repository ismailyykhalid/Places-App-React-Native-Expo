import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TabNavgation from "./App/Navigations/TabNavgation";
import { MyContextProvider } from "./Context/UserLocationContext";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <View style={styles.container}>
      <MyContextProvider>
        <NavigationContainer>
          <TabNavgation />
        </NavigationContainer>
      </MyContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
