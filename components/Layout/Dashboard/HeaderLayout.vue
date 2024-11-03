<script lang="ts" setup>
const colorMode = useColorMode();
</script>

<template>
  <header class="flex items-center justify-between bg-blue-600 p-4 flex-shrink-0">
    <h1 class="text-lg font-semibold text-white">
      My website
    </h1>
    <div>
      <p class="p-4 pb-2">
        <select
          v-model="colorMode.preference"
          class="rounded border w-24 h-8 dark:bg-gray-900 dark:text-white dark:border-gray-700"
        >
          <option value="system">
            System
          </option>
          <option value="light">
            Light
          </option>
          <option value="dark">
            Dark
          </option>
        </select>
      </p>
    </div>
  </header>
</template>

<style lang="css" scoped>

</style>
