import React from "react";
import { View, Image, Text, TouchableWithoutFeedback } from "react-native";
import styles from "@/src/styles/components/SightingCard/styles";
import { Sighting } from "../../types/types";

const SightingDetails = ({
  sighting,
  toggleImageModal,
}: {
  sighting: Sighting;
  toggleImageModal: () => void;
}) => (
  <View style={styles.detailsContainer}>
    <TouchableWithoutFeedback onPress={toggleImageModal}>
      <Image source={{ uri: sighting.picture }} style={styles.imageLarge} />
    </TouchableWithoutFeedback>
    <Text style={styles.title}>{sighting.witnessName}</Text>
    <Text style={styles.subtitle}>
      Location: {sighting.location.latitude}, {sighting.location.longitude}
    </Text>
    <Text style={styles.description}>{sighting.description}</Text>
  </View>
);

export default SightingDetails;