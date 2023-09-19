import React from 'react';

type TimeZoneProps = {
  countryCode: string;
  countryName: string;
  zoneName: string;
  gmtOffset: number;
  timestamp: number;
};

const Times = async () => {
  const apiKey = process.env.TIMEZONE_DB_API_KEY;
  const apiUrl = 'http://api.timezonedb.com/v2.1/list-time-zone';

  const res = await fetch(`${apiUrl}?key=${apiKey}&format=json`, {
    cache: 'no-cache',
  });
  const data = await res.json();

  let fivePmTimeZones = data.zones.filter((zone: TimeZoneProps) => {
    const localTime = new Date(
      new Date().toLocaleString('en-US', { timeZone: zone.zoneName })
    );
    const hours = localTime.getHours();
    return hours === 17;
  });

  const formatCityName = (zoneName: string): string => {
    return zoneName.split('/')[1].replace(/_/g, ' ');
  };

  return (
    <div>
      <h3>Times</h3>
      {fivePmTimeZones.length > 0 ? (
        fivePmTimeZones.map((zone: TimeZoneProps) => (
          <>
            <h3>{zone.countryName}</h3>
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
          </>
        ))
      ) : (
        <li>No cities found</li>
      )}
    </div>
  );
};

export default Times;
