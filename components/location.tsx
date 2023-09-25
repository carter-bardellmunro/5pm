'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { formatCityName } from '@/actions/formateName';
import { TimeZoneProps } from '@/lib/types';

const fadeInAmimationsVariant = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5 * index,
    },
  }),
};

const Location = ({ zone }: { zone: TimeZoneProps }, index: number) => {
  return (
    <motion.div
      className="bg-stone-50 border border-black/10 flex flex-col items-center rounded-lg max-w-[52rem] my-4 sm:m-2 p-3"
      key={index}
      variants={fadeInAmimationsVariant}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
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
    </motion.div>
  );
};

export default Location;
