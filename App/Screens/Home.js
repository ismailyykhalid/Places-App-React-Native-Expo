import { View, Text } from "react-native";
import React from "react";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import GoogleMaps from "../components/GoogleMaps";

export default function Home() {
  return (
    <SafeAreaView>
      <View>
        <StatusBar />
        <Header />
        <GoogleMaps />
      </View>
    </SafeAreaView>
  );
}
