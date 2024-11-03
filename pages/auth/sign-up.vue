<script setup lang="ts">
definePageMeta({
  name: 'sign-up',
  layout: 'auth-layout'
});

useHead({
  title: 'Sign up'
});
</script>

<template>
  <nuxt-layout>
    <view-auth-sign-up-view />
  </nuxt-layout>
</template>

<style lang="css" scoped>

</style>
