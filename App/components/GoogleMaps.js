import { useContext, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { UserLocationContext } from "../../Context/UserLocationContext";

export default function GoogleMaps() {
  const { location } = useContext(UserLocationContext);
  console.log(location);
  const [mapRegion, setMapRegion] = useState({
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
    latitudeDelta: 0.044,
    longitudeDelta: 0.055,
  });
  return (
    <View>
      <Text className="font-semibold  m-3 text-lg">Top Near By Places</Text>
      <View className="flex items-center ">
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          region={mapRegion}
        >
          <Marker
            coordinate={mapRegion}
            title="My Location"
            description="This is my Home Location"
          />
        </MapView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: wp(96),
    height: hp(30),
    borderRadius: 15,
  },
});
