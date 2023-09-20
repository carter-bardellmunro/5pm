/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Link from 'next/link';
import { BiWorld } from 'react-icons/bi';

const Intro = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold text-center p-2 m-2 sm:text-5xl">
        Everyone always says "It's five o'clock somewhere!". But have you, like
        me, ever wondered "OK, but where is it actually 5:00 PM in the world?".
        Well, let's find out.
      </h1>
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
