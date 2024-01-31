import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import CatogeryItem from "./CatogeryItem";

export default function CategoryList() {
  const [categoryList, setCategoryList] = useState([
    {
      id: 1,
      name: "Gas Stations",
      value: "gas_station",
      icon: require("../../../assets/gasIcon.png"),
    },
    {
      id: 2,
      name: "Restaurants",
      value: "resturants",
      icon: require("../../../assets/foodIcon.png"),
    },
    {
      id: 3,
      name: "Cafe's",
      value: "cafe",
      icon: require("../../../assets/cafeIcon.png"),
    },
  ]);
  return (
    <View>
      <View className="sp-2 w-full h-full ">
        <Text className="font-bold text-lg my-2">Search Top Categories</Text>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={categoryList}
          renderItem={({ item }) => (
            <View key={item.id} className="">
              <CatogeryItem item={item} />
            </View>
          )}
        ></FlatList>
      </View>
    </View>
  );
}
