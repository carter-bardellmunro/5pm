import React from 'react';
import Link from 'next/link';
import LocationsList from '@/components/locations-list';
import RefreshButton from './refresh-button';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const Timezones = () => {
  return (
    <div className="m-6">
      <Link href="/">
        <AiOutlineArrowLeft className="text-2xl" />
      </Link>
      <div className="flex flex-col justify-center items-center">
        <LocationsList />
        <RefreshButton />
      </div>
    </div>
  );
};

export default Timezones;
