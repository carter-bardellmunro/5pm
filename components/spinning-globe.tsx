'use client';

import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const SpinningGlobe = () => {
  return (
    <div>
      <Player
        autoplay
        loop
        src={require('../assets/animations/spinning-globe.json')}
        style={{ height: '25rem', width: '25rem' }}
      />
    </div>
  );
};

export default SpinningGlobe;
