import { SERVER } from '../constants/Server';

export const register = async () => {
  const res = await fetch(`${SERVER}/api/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    // body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};
