'use client';

import { getWaveData } from '@/services/actions';
import { useState } from 'react';

/**
 * Test component to display fetch result
 *
 */
export default function DisplayWaveData({ long, lat }: { long: number; lat: number }) {
  const [waveData, setWaveData] = useState(0);

  const handleClick = async () => {
    setWaveData(await getWaveData({ longitude: long, latitude: lat }));
  };

  return (
    <>
      <button onClick={handleClick}>Get wave height</button>
      <div>{waveData}</div>
    </>
  );
}
