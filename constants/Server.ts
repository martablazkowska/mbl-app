const IS_DEV = process.env.NODE_ENV !== 'production';

export const SERVER = IS_DEV
  ? 'http://localhost:3000'
  : 'https://fbl-mbl.vercel.app';
