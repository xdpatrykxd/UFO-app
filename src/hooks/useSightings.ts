import { useState, useEffect, useCallback } from 'react';
import { getSightings } from '../utils/api';
import { Sighting } from '@/src/types/types';

export const useSightings = () => {
  const [sightings, setSightings] = useState<Sighting[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const fetchSightings = async () => {
    try {
      setLoading(true);
      const data = await getSightings();
      const sortedSightings = data.sort((a: { dateTime: string | number | Date }, b: { dateTime: string | number | Date }) =>
        new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime()
      );
      setSightings(sortedSightings);
      setLoading(false);
    } catch (error) {
      setError('Failed to load sightings');
      setLoading(false);
    }
  };

  const refreshHandler = useCallback(async () => {
    setRefreshing(true);
    await fetchSightings();
    setRefreshing(false);
  }, []);

  useEffect(() => {
    fetchSightings();
  }, []);

  return { sightings, loading, error, refreshing, refreshHandler, fetchSightings};
};