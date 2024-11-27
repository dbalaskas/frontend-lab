<script lang="ts" setup>
const colorMode = useColorMode();

const colorModeOptions = ['light', 'dark'];
</script>

<template>
  <select
    v-model="colorMode.preference"
    class="theme-selector"
  >
    <option
      v-for="option in colorModeOptions"
      :key="option">
      {{ option }}
    </option>
  </select>
</template>

<style lang="css" scoped>

</style>
