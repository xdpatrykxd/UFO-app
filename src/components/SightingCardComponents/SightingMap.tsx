import React from "react";
import MapView, { Marker } from "react-native-maps";
import { Sighting } from "../../types/types";
import styles from "@/src/styles/components/SightingCard/styles";

const SightingMap = ({
  sightings,
  selectedSighting,
  handlePinPress,
}: {
  sightings: Sighting[];
  selectedSighting: Sighting | null;
  handlePinPress: (sighting: Sighting) => void;
}) => (
  <MapView
    style={styles.map}
    region={{
      latitude: selectedSighting?.location.latitude || 0,
      longitude: selectedSighting?.location.longitude || 0,
      latitudeDelta: 5,
      longitudeDelta: 5,
    }}
  >
    {sightings.map((sighting) => (
      <Marker
        key={sighting.id}
        coordinate={{
          latitude: sighting.location.latitude,
          longitude: sighting.location.longitude,
        }}
        title={sighting.witnessName}
        description={sighting.description}
        onPress={() => handlePinPress(sighting)}
      />
    ))}
  </MapView>
);

export default SightingMap;