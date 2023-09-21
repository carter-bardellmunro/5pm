'use client'

import React from 'react';
import { IoMdRefresh } from 'react-icons/io';
import { refreshPage } from '@/actions/refreshPage';

const RefreshButton = () => {
  return (
    <button
    className="flex items-center justify-center mt-4 gap-2 h-[3rem] w-[10rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 disabled:scale-100 disabled:bg-opacity-65"
    type="button"
    onClick={refreshPage}
  >
    Refresh Times{' '}
    <IoMdRefresh className="text-lg opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
  </button>
  );
};

export default RefreshButton;
