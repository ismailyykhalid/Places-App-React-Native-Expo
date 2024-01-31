import { View, Text, FlatList, Image } from "react-native";
import React, { useState } from "react";

export default function ListOfItems() {
  const [listItem, setListItem] = useState([
    {
      id: 1,
      name: "AlBaik",
      image:
        "https://www.arabnews.pk/sites/default/files/styles/n_670_395/public/2021/10/03/2841131-1190069821.jpg?itok=mLpaT-f9",
      logo: "https://upload.wikimedia.org/wikipedia/ar/a/a1/Albaik_logo.svg",
    },
  ]);
  return (
    <View>
      <FlatList
        data={listItem}
        renderItem={({ item }) => (
          <View className="border w-full h-full"></View>
        )}
      ></FlatList>
    </View>
  );
}
