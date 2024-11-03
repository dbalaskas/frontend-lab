<script setup lang="ts">
definePageMeta({
  name: 'dashboard',
  layout: 'dashboard-layout'
});

useHead({
  title: 'Dashboard'
});
</script>

<template>
  <nuxt-layout>
    <view-dashboard-view />
  </nuxt-layout>
</template>

<style lang="css" scoped>

</style>
