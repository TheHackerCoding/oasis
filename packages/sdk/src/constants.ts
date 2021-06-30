import { gqlURL } from './lib/constants';

export const API_BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://oasis.sh'
    : process.env.API_BASE_URL ?? gqlURL;

