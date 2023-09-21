/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Link from 'next/link';
import { BiWorld } from 'react-icons/bi';
import SpinningGlobe from './spinning-globe';

const Intro = () => {
  return (
    <section className="flex flex-col justify-center items-center w-4/5">
      <h1 className="text-4xl text-wrap font-bold text-center p-2 my-8 sm:text-5xl">It's five o'clock somewhere, right?</h1>
      <SpinningGlobe />
      <div className='max-w-xl'>
        <p className="text-base text-center p-2 my-4 sm:text-xl">
          Everyone always says "It's five o'clock somewhere!". But have you,
          like me, ever wondered "OK, but where is it actually 5:00 PM in the
          world?". Well, let's find out.
        </p>
      </div>
      <Link href="/timezones">
        <button className="flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 disabled:scale-100 disabled:bg-opacity-65">
          Find out!{' '}
          <BiWorld className="text-s opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </Link>
    </section>
  );
};

export default Intro;
