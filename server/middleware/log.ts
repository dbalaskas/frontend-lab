/* eslint-disable no-console */

export default defineEventHandler((event) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`New request: ${getRequestURL(event)}`);
  }
});
