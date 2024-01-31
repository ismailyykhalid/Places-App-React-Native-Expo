import { View, Text, ScrollView } from "react-native";
import React, { useEffect } from "react";
import Header from "../components/Home/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import GoogleMaps from "../components/Home/GoogleMaps";
import CategoryList from "../components/Home/CategoryList";
import GlobalApi from "../Services/GlobalApi";
import ListOfItems from "../components/Home/ListOfItems";

export default function Home() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <StatusBar />
          <Header />
          <GoogleMaps />
          <CategoryList />
          <ListOfItems />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
