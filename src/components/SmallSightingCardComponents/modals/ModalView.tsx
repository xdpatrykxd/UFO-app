import React from 'react';
import { Modal, View, ScrollView, Pressable, Text } from 'react-native';
import styles from '@/src/styles/components/SmallSightingCard/styles';
import { Sighting } from '@/src/types/types';
import SmallSightingMap from '../SmallSightingMap';
import SmallSightingDetails from '../SmallSightingDetails';

const ModalView = ({
  isVisible,
  toggleModal,
  sighting,
}: {
  isVisible: boolean;
  toggleModal: () => void;
  sighting: Sighting;
}) => (
  <Modal animationType="fade" transparent={true} visible={isVisible} onRequestClose={toggleModal}>
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <ScrollView contentContainerStyle={styles.modalScroll}>
          {/* Map */}
          <SmallSightingMap sighting={sighting} />

          {/* Sighting Details */}
          <SmallSightingDetails sighting={sighting} />

          {/* Close Button */}
          <Pressable style={styles.closeButton} onPress={toggleModal}>
            <Text style={styles.closeButtonText}>Close</Text>
          </Pressable>
        </ScrollView>
      </View>
    </View>
  </Modal>
);

export default ModalView;