type TimeZoneProps = {
  countryCode: string;
  countryName: string;
  zoneName: string;
  gmtOffset: number;
  timestamp: number;
};

const apiKey = process.env.TIMEZONE_DB_API_KEY;
const apiUrl = 'http://api.timezonedb.com/v2.1/list-time-zone';

export const fetchTimeZones = async () => {
  const res = await fetch(`${apiUrl}?key=${apiKey}&format=json`);
  const data = await res.json();
  return data.zones as TimeZoneProps[];
};

export const getFivePmTimeZones = async () => {
  const timeZones = await fetchTimeZones();
  return timeZones.filter((zone) => {
    const localTime = new Date(
      new Date().toLocaleString('en-US', { timeZone: zone.zoneName })
    );
    const hours = localTime.getHours();
    return hours === 17;
  });
};
