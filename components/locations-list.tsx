import React from 'react';
import Locations from './location';
import { getFivePmTimeZones } from '@/api/getTimes';
import { TimeZoneProps } from '@/lib/types';

const LocationsList = async () => {
  const timezones = await getFivePmTimeZones();

  return (
    <section className="justify-center w-full my-4 sm:flex sm:flex-wrap">
      {timezones.length > 0 ? (
        timezones.map((zone: TimeZoneProps, index) => (
          <Locations zone={zone} key={index} />
        ))
      ) : (
        <li>No cities found</li>
      )}
    </section>
  );
};

export default LocationsList;
