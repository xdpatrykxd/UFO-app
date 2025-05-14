import styles from '@/src/styles/components/FilterButton/styles';
import React from 'react';
import { Modal, Button, View, Text, TouchableOpacity } from 'react-native';

interface FilterButtonProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  applyFilter: (filter: string) => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ showModal, setShowModal, applyFilter }) => {
  return (
    <View>
      {/* Filter Button */}
      <TouchableOpacity style={styles.filterButton} onPress={() => setShowModal(true)}>
        <Text style={styles.filterButtonText}>Filter Sightings</Text>
      </TouchableOpacity>

      {/* Filter Modal */}
      <Modal
        visible={showModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select a Filter</Text>
            <Button title="All" onPress={() => applyFilter('all')} />
            <Button title="Confirmed" onPress={() => applyFilter('confirmed')} />
            <Button title="Unconfirmed" onPress={() => applyFilter('unconfirmed')} />
            <Button title="Close" onPress={() => setShowModal(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default FilterButton;