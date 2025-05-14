import React from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import { useSightings } from '../src/hooks/useSightings';
import LoadingErrorView from '../src/components/LoadingErrorView';
import styles from '../src/styles/app/RecentSightings/styles';
import SightingCard from '@/src/components/SightingCardComponents/SightingCard';

const RecentSightingPage = () => {
  const { sightings, loading, error, refreshing, refreshHandler } = useSightings();

  return (
    <ScrollView
      style={styles.container}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={refreshHandler} />}
    >
      <LoadingErrorView
        loading={loading}
        sightings={sightings}
        error={error}
        noDataMessage="No sightings found."
      />
      {sightings.length > 0 && <SightingCard sightings={sightings} />}
    </ScrollView>
  );
};

export default RecentSightingPage;
