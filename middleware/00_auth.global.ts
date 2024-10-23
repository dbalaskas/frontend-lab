export default defineNuxtRouteMiddleware(() => {
  // if (!isAuthenticated()) {
  //   return navigateTo({ name: 'sign-in' });
  // }

  // eslint-disable-next-line no-console
  console.log('00_auth.global Middleware');
});
