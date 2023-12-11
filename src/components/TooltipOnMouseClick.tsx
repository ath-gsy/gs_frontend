'use client';

import React, { useState } from 'react';
import { Coordinates } from '@/types/coordinates';

export default function TooltipOnMouseClick({ coordinates, waveData, children }: { coordinates: Coordinates; waveData: number; children: React.ReactNode }) {
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setTooltipPosition({ x: event.pageX, y: event.pageY });
    setShowTooltip(true);
  };

  return (
    <div>
      <div onClick={handleMouseClick}>{children}</div>
      {showTooltip && (
        <div
          style={{
            position: 'absolute',
            left: tooltipPosition.x,
            top: tooltipPosition.y,
            backgroundColor: 'black',
            color: 'white',
            padding: '10px',
            borderRadius: '5px',
          }}
        >
          long: {coordinates.longitude}, lat: {coordinates.latitude}, waveData: {waveData}
        </div>
      )}
    </div>
  );
}
