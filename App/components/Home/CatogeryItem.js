import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function CatogeryItem({ item }) {
  return (
    <View>
      <TouchableOpacity className="items-center justify-center px-7 m-1 bg-violet-200 rounded-lg">
        <Image
          style={{ width: wp(10), height: hp(5) }}
          className="mt-2"
          source={item.icon}
        />

        <Text className="my-2">{item.name}</Text>
      </TouchableOpacity>
    </View>
  );
}
