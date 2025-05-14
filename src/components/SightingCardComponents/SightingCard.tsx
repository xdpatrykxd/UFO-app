import React, { useState, useEffect } from "react";
import { ScrollView, View, Text } from "react-native";
import styles from "@/src/styles/components/SightingCard/styles";
import { Sighting } from "@/src/types/types";
import SightingDetails from "./SightingDetails";
import SightingMap from "./SightingMap";
import ImageModal from "./modals/ImageModal";

const SightingCard = ({ sightings }: { sightings: Sighting[] }) => {
  const [selectedSighting, setSelectedSighting] = useState<Sighting | null>(
    sightings[0] || null
  );
  const [isImageModalVisible, setImageModalVisible] = useState(false);

  // Sync `selectedSighting` with new `sightings` when it changes
  useEffect(() => {
    if (sightings && sightings.length > 0) {
      setSelectedSighting(sightings[0]);
    } else {
      setSelectedSighting(null);
    }
  }, [sightings]);

  const handlePinPress = (sighting: Sighting) => {
    setSelectedSighting(sighting);
  };

  const toggleImageModal = () => {
    setImageModalVisible(!isImageModalVisible);
  };

  if (!sightings || sightings.length === 0 || !selectedSighting) {
    return (
      <View style={styles.noSightingsContainer}>
        <Text style={styles.noSightingsText}>No sightings available.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <SightingDetails sighting={selectedSighting} toggleImageModal={toggleImageModal} />
      <SightingMap sightings={sightings} selectedSighting={selectedSighting} handlePinPress={handlePinPress} />
      <ImageModal
        isVisible={isImageModalVisible}
        toggleImageModal={toggleImageModal}
        picture={selectedSighting.picture}
      />
    </ScrollView>
  );
};

export default SightingCard;