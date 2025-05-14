import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import styles from '@/src/styles/components/SmallSightingCard/styles';
import { Sighting } from '@/src/types/types';

const SmallSightingMap = ({ sighting }: { sighting: Sighting }) => (
  <MapView
    style={styles.map}
    initialRegion={{
      latitude: sighting.location.latitude,
      longitude: sighting.location.longitude,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    }}
  >
    <Marker
      coordinate={{
        latitude: sighting.location.latitude,
        longitude: sighting.location.longitude,
      }}
      title="Sighting Location"
      description={sighting.description}
    />
  </MapView>
);

export default SmallSightingMap;
