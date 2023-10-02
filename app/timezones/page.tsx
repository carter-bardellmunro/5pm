/* eslint-disable react/no-unescaped-entities */
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
        <h1 className="text-4xl text-wrap font-bold text-center p-2 my-8 sm:text-5xl">
          Let's see...
        </h1>
        <LocationsList />
        <RefreshButton />
      </div>
    </div>
  );
};

export default Timezones;
