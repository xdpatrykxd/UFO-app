import React, { useCallback, useState } from 'react';
import { View, FlatList, Dimensions } from 'react-native';
import { useSightings } from '../src/hooks/useSightings';
import { useFilter } from '../src/hooks/useFilter';
import LoadingErrorView from '../src/components/LoadingErrorView';
import FilterButton from '../src/components/FilterButton';
import SmallSightingCard from '../src/components/SmallSightingCardComponents/SmallSightingCard';
import styles from '../src/styles/app/SightingsList/styles';

const screenWidth = Dimensions.get('window').width;

const SightingList = () => {
  const { sightings, loading, error, fetchSightings } = useSightings();
  const { filter, filteredSightings, setFilter } = useFilter(sightings);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const refreshHandler = useCallback(async () => {
    setRefreshing(true);
    await fetchSightings();
    setRefreshing(false);
  }, [fetchSightings]);

  const applyFilter = (selectedFilter: string) => {
    setFilter(selectedFilter);
    setShowModal(false);
  };

  const renderSighting = ({ item }: { item: any }) => (
    <SmallSightingCard item={item} />
  );

  return (
    <View style={styles.container}>
      <LoadingErrorView loading={loading} error={error} sightings={sightings} />

      {!loading && !error && (
        <>
          {/* Filter Button */}
          <FilterButton
            showModal={showModal}
            setShowModal={setShowModal}
            applyFilter={applyFilter}
          />

          {/* Display filtered sightings */}
          <FlatList
            data={filteredSightings}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderSighting}
            contentContainerStyle={styles.list}
            refreshing={refreshing}
            onRefresh={refreshHandler}
            numColumns={3}
            columnWrapperStyle={styles.row}
          />
        </>
      )}
    </View>
  );
};

export default SightingList;