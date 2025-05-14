import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image, Dimensions } from 'react-native';
import { Sighting } from '../../types/types';  // Assuming you have a `types` file
import styles from '@/src/styles/components/SmallSightingCard/styles';
import ModalView from './modals/ModalView';

const SmallSightingCard = ({ item }: { item: Sighting }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  // Calculate dynamic width for each card
  const screenWidth = Dimensions.get('window').width;
  const cardWidth = (screenWidth - 48) / 3;

  return (
    <View style={[styles.cardContainer, { width: cardWidth }]}>
      {/* Sighting Card */}
      <TouchableOpacity onPress={toggleModal} style={styles.card}>
        <View style={styles.cardContent}>
          <Image source={{ uri: item.picture }} style={styles.image} />
          <Text style={styles.title}>{item.witnessName}</Text>
          <Text style={styles.subtitle}>
            Location: {item.location.latitude}, {item.location.longitude}
          </Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </TouchableOpacity>

      {/* Popup Modal with Map and Details */}
      <ModalView
        isVisible={isModalVisible}
        toggleModal={toggleModal}
        sighting={item}
      />
    </View>
  );
};

export default SmallSightingCard;