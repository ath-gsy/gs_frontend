'use client';

import Image from 'next/image';
import mapImage from '../../public/world_map.jpg';
import { useState } from 'react';
import { positionToCoordinates } from '@/utils/coordinates.utils';
import TooltipOnMouseClick from '../components/TooltipOnMouseClick';
import { getWaveData } from '@/services/actions';
import { Coordinates } from '@/types/coordinates';

export default function Map() {
  const mapHeight = 1646;
  const mapWidth = 3813;

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [coordinates, setCoordinates] = useState(positionToCoordinates(position, mapHeight, mapWidth));
  const [waveData, setWaveData] = useState(0);

  function handleClick(event: React.MouseEvent<HTMLDivElement>) {
    let x = event.nativeEvent.offsetX;
    let y = event.nativeEvent.offsetY;
    setPosition({ x, y });
    setCoordinates(positionToCoordinates(position, mapHeight, mapWidth));
    handleApiCall(coordinates);
  }

  const handleApiCall = async (coordinates: Coordinates) => {
    const response = await getWaveData(coordinates);
    setWaveData(response);
  };

  return (
    <div className="map" onClick={handleClick}>
      <div>
        x:{position.x}, y:{position.y}
      </div>
      <div>
        long: {coordinates.longitude}, lat: {coordinates.latitude}
      </div>
      <TooltipOnMouseClick coordinates={coordinates} waveData={waveData}>
        <Image src={mapImage} alt="world_map" height={mapHeight} width={mapWidth} />
      </TooltipOnMouseClick>
    </div>
  );
}
