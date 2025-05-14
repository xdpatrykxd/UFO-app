import { useState, useEffect } from 'react';
import { Sighting } from '../types/types';

export const useFilter = (sightings: Sighting[]) => {
  const [filter, setFilter] = useState<string>('all');
  const [filteredSightings, setFilteredSightings] = useState<Sighting[]>([]);

  useEffect(() => {
    if (filter === 'all') {
      setFilteredSightings(sightings);
    } else {
      setFilteredSightings(sightings.filter(sighting => sighting.status === filter));
    }
  }, [filter, sightings]);

  return { filter, filteredSightings, setFilter };
};