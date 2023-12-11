import { Coordinates, Position } from '@/types/coordinates';

export const positionToCoordinates = (position: Position, mapHeight: number, mapWidth: number): Coordinates => {
  const totalLongitude = 360;
  const totalLatitude = 150;

  const longitude = parseFloat(((position.x * totalLongitude) / mapWidth - 180).toFixed(2));
  const latitude = parseFloat((-((position.y * totalLatitude) / mapHeight) + 90).toFixed(2));

  return { longitude, latitude };
};
