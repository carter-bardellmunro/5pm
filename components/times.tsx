import React from 'react';
import { getFivePmTimeZones } from '@/api/getTimes';
import { formatCityName } from '@/actions/formateName';

const Times = async () => {
  const timezones = await getFivePmTimeZones()

  return (
    <section className="w-full mx-3 justify-center sm:max-w-[58rem] sm:flex sm:flex-wrap">
      {timezones.length > 0 ? (
        timezones.map((zone) => (
          <>
            <div
              className="bg-white border border-black/10 flex flex-col items-center rounded-lg my-2 mx-5 sm:m-1 p-3"
              
            >
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
          </>
        ))
      ) : (
        <li>No cities found</li>
      )}
    </section>
  );
};

export default Times;
