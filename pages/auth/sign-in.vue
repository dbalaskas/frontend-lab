<script setup lang="ts">
definePageMeta({
  name: 'sign-in',
  layout: 'auth-layout'
});

useHead({
  title: 'Sign in'
});
</script>

<template>
  <nuxt-layout>
    <view-auth-sign-in-view />
  </nuxt-layout>
</template>

<style lang="css" scoped>

</style>
