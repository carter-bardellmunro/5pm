import React from 'react';
import { formatCityName } from '@/actions/formateName';
import { TimeZoneProps } from '@/lib/types';

const Location = ({ zone }: { zone: TimeZoneProps }) => {
  return (
    <div className="bg-white border border-black/10 flex flex-col items-center rounded-lg my-2 mx-5 sm:m-1 p-3">
      <h2>{zone.countryName}</h2>
      <ul>
        <li key={zone.countryCode}>
          {formatCityName(zone.zoneName)} -{' '}
          {new Date(
            new Date().toLocaleString('en-US', {
              timeZone: zone.zoneName,
            })
          ).toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
          })}
        </li>
      </ul>
    </div>
  );
};

export default Location;
