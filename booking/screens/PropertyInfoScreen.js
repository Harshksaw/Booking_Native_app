import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";

import { useRoute } from "@react-navigation/native";
import { ScrollView } from "@gluestack-ui/themed";
import { pixelNormalize } from "../components/Normalize";
import { MaterialIcons } from "@expo/vector-icons";

const PropertyInfoScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: `${route.params.propertyName}`,
      headerTitleStyle: {
        fontSize: 17,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
      headerRight: () => (
        <Ionicons
          name="notifications-outline"
          size={24}
          color="white"
          style={{ marginRight: 12 }}
        />
      ),
    });
  }, []);

  const difference = route.params.oldPrice - route.params.newPrice;
  const offerPrice = (Math.abs(difference) / route.params.oldPrice) * 100;
  return (
    <ScrollView>
      <Pressable>
        {route.params.photos.slice(0, 5).map((photo) => (
          <View>
            <Image
              source={{ uri: photo.image }}
              style={{
                width: 120,
                height: pixelNormalize(80),
                borderRadius: pixelNormalize(4),
              }}
            />
          </View>
        ))}

        <Pressable style={{ alignItems: "center", justifyContent: "center" }}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 19,
              fontWeight: "bold",
              color: "#003580",
            }}
          >
            Show More
          </Text>
        </Pressable>
      </Pressable>
      <View
        style={{
          marginHorizontal: 12,
          marginTop: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text>{route.params.name}</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 6,
              marginTop: 7,
            }}
          >
            <MaterialIcons name="stars" size={24} color="green" />
            <Text>{route.params.rating}</Text>
            <View
              style={{
                backgroundColor: "#69e9ac",
                paddingVertical: 3,
                borderRadius: 5,
                width: 100,
              }}
            >
              <Text
                style={{ textAlign: "center", color: "#e0a6a6", fontSize: 15 }}
              >
                Genius Level
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#8d8deb",
                paddingHorizontal: 6,
                paddignVertical: 4,
                borderRadius: 10,
              }}
            >
              <Text style={{ color: "white", fontSize: 12 }}>
                Travel Susatainable
              </Text>
            </View>
          </View>
        </View>
      </View>
      <Text
        style={{
          marginHorizontal: 12,
          marginTop: 10,
          fontSize: 16,
          borderColor: "#9c9cf6",
        }}
      />
      {/* //content */}
      <Text
        style={{
          marginTop: 4,
          fontSize: 15,
          fontWeight: "500",
          marginHorizontal: 12,
        }}
      >
        Price for {route.params.adults}
      </Text>
      <View
        style={{
          marginTop: 5,
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 12,
          marginVertical: 20,
          marginTop: 14,

          gap: 8,
        }}
      >
        <Text
          style={{
            color: "red",
            fontSize: 18,
            textDecorationLine: "line-through",
          }}
        >
          {route.params.oldPrice * adults}
        </Text>
        <Text style={{ fontSize: 18 }}>
          Rs {route.params.newPrice * route.params.adults}
        </Text>
      </View>
      <View
        style={{
          marginHorizontal: 12,
          marginTop: 4,
          backgroundColor: "green",
          paddingVertical: 5,
          width: 50,
          borderRadius: 4,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
          }}
        >
          {offerPrice.toFixed(0)} %
        </Text>
      </View>
      <Text
        style={{
          borderColor: "black",
          borderWidth: 1,
          height: 1,
          marginTop: 15,
        }}
      />
      <View>
        <View>
          <Text style={{ fontSize: 15, fontWeight: "600", marginBottom: 3 }}>
            Check In
          </Text>
          <Text>{route.params.selectedDates.startDate}</Text>
        </View>
        <View>
          <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 3 }}>
            Check Out
          </Text>
          <Text>{route.params.selectedDates.endDate}</Text>
        </View>
      </View>
      <View style={{ margin: 12 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 3 }}>
          Room and Guests
        </Text>

        <Text>
          {route.params.rooms} rooms {route.params.adults} adults{" "}
          {route.params.children} children
        </Text>
      </View>{" "}
    </ScrollView>
  );
};

export default PropertyInfoScreen;

const styles = StyleSheet.create({});
