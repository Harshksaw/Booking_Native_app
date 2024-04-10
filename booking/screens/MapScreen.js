import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import MapView from "react-native-maps";
import { useRoute } from "@react-navigation/native";
import { Marker } from "react-native-maps";

const MapScreen = () => {
  const route = useRoute();
  const mapView = useRef(null);

  const details = route.params.searchResults.map((item) =>
    item.properties?.map((prop) => {
      coordinates.push({
        latitude: Number(prop.latitude),
        longitude: Number(prop.longitude),
      });
    })
  );

  useEffect(() => {
    mapView.current.fitToCoordinates(coordinates, {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
  }, []);


  return (
    <View>
      <MapView
     
        ref={mapView}
        style={{ width: "100%", height: "100%" }}
      >
        {route.params.searchResults.map((item) =>
          item.properties.map((property) => (
            <Marker
              title={property.name}
              coordinate={{
                latitude: Number(property.latitude),
                longitude: Number(property.longitude),
              }}
            >
              <Pressable
                style={{
                  backgroundColor: "#eb893e",
                  padding: 10,
                  borderRadius: 20,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Rs. {property.price}
                </Text>
              </Pressable>
            </Marker>
          ))
        )}
      </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
