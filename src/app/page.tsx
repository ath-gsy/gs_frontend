import React from 'react';
import DisplayWaveData from '../components/DisplayWaveData';
import Map from '../container/Map';

export default async function Home() {
  return (
    <div className="map-container">
      <Map></Map>
    </div>
  );
}
