import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { LoadingErrorViewProps } from '@/src/types/types';
import styles from '../styles/app/RecentSightings/styles';
const LoadingErrorView: React.FC<LoadingErrorViewProps> = ({ error, sightings, loading, noDataMessage }) => {
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#00ffcc" />
      </View>
    );
  }

  if (sightings && error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  if (sightings && sightings.length === 0 && noDataMessage) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{noDataMessage}</Text>
      </View>
    );
  }

  return null;
};

export default LoadingErrorView;