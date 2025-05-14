import React from 'react';
import { View, Text } from 'react-native';
import styles from '@/src/styles/components/SmallSightingCard/styles';
import { Sighting } from '@/src/types/types';

const SightingDetails = ({ sighting }: { sighting: Sighting }) => (
  <View style={styles.detailsContainer}>
    <Text style={styles.detailTitle}>Sighting Details</Text>
    <Text style={styles.detailText}>
      <Text style={styles.detailLabel}>Witness Name: </Text>
      {sighting.witnessName}
    </Text>
    <Text style={styles.detailText}>
      <Text style={styles.detailLabel}>Date of Sighting: </Text>
      {sighting.dateTime}
    </Text>
    <Text style={styles.detailText}>
      <Text style={styles.detailLabel}>Description: </Text>
      {sighting.description}
    </Text>
  </View>
);

export default SightingDetails;