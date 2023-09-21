import React from 'react';
import LocationsList from '@/components/locations-list';
import RefreshButton from './button';

const Timezones = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <LocationsList />
      <RefreshButton />
    </div>
  );
};

export default Timezones;
