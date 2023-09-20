import React from 'react';
import Locations from './location';
import { getFivePmTimeZones } from '@/api/getTimes';
import { TimeZoneProps } from '@/lib/types';

const LocationsList = async () => {
  const timezones = await getFivePmTimeZones();

  return (
    <section className="w-full mx-3 justify-center sm:max-w-[52rem] sm:flex sm:flex-wrap">
      {timezones.length > 0 ? (
        timezones.map((zone: TimeZoneProps) => (
          <Locations zone={zone} key={zone.countryCode} />
        ))
      ) : (
        <li>No cities found</li>
      )}
    </section>
  );
};

export default LocationsList;
