import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/app/ReportSightings/styles';

type Props = {
  status: string;
  setStatus: (status: string) => void;
};

const StatusSelector: React.FC<Props> = ({ status, setStatus }) => (
  <View style={styles.statusContainer}>
    <Text style={styles.statusLabel}>Status:</Text>
    {['unconfirmed', 'confirmed'].map((option) => (
      <TouchableOpacity
        key={option}
        style={[
          styles.statusButton,
          status === option && styles.selectedStatusButton,
        ]}
        onPress={() => setStatus(option)}
      >
        <Text
          style={[
            styles.statusButtonText,
            status === option && styles.selectedStatusButtonText,
          ]}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
);

export default StatusSelector;