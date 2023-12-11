'use server';

import { Coordinates } from '@/types/coordinates';

export async function getWaveData(coordinates: Coordinates) {
  const api_endpoint = process.env.API_URL + '/wave_data';
  const fetch_request = `${api_endpoint}?long=${coordinates.longitude}&lat=${coordinates.latitude}`;
  console.log(fetch_request);
  const response = await fetch(fetch_request, {
    method: 'GET',
  });

  console.log(response);

  const result = await response.json().catch((error) => {
    console.error(error);
    return 'No data fetched';
  });
  return result ?? 'Loading...';
}
