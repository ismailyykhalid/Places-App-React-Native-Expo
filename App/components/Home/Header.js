import { View, Text, Image, TextInput, Dimensions } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Header() {
  return (
    <View style={{ width: wp(100) }}>
      <View className="flex flex-row justify-between items-center mb-3 ">
        <Image
          style={{
            width: wp(14),
            height: hp(6),
          }}
          className=" rounded-full"
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/5088/5088135.png",
          }}
        />
        <TextInput
          style={{ width: wp(75) }}
          className="border  rounded-full p-[7] mr-1"
          placeholder="Search places"
        />
        <Ionicons name="person-circle-outline" size={40} color="black" />
      </View>
    </View>
  );
}
