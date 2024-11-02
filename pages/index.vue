<script setup lang="ts">
const colorMode = useColorMode();
</script>

<template>
  <div class=" bg-white dark:bg-gray-900">
    <div>
      <div>
        <span class="text-primary">
          Hello World<Icon name="mdi:home" />
        </span>
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
      <div class="max-w-sm rounded overflow-hidden shadow-lg m-4">
        <img
          class="w-full"
          src="https://tailwindcss.com/img/card-top.jpg"
          alt="Sunset in the mountains"
        >
        <div class="px-6 py-4 pb-2">
          <div class="font-bold text-xl mb-2 dark:text-white">
            The Coldest Sunset
          </div>
          <p class="text-gray-700 dark:text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
            quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
            nihil.
          </p>
        </div>
        <div class="px-6 py-4">
          <span class="badge mr-2">#photography</span>
          <span class="badge mr-2">#travel</span>
          <span class="badge">#winter</span>
        </div>
        <div class="px-6 py-4 dark-mode">
          <span class="badge mr-2">#staysdark</span>
          <span class="badge force-light">#stayslight</span>
        </div>
      </div>
      <NuxtPage class="mx-auto p-4" />
    </div>

    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

<style lang="postcss" scoped>
body {
  @apply min-h-screen bg-white dark:bg-gray-800 dark:text-gray-200;
}

.badge {
  @apply inline-block bg-gray-200 dark:bg-gray-950 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-400;
  &:hover {
    @apply bg-gray-300;
  }
}

.dark-mode .force-light {
  @apply bg-gray-200 text-gray-700;
}
</style>
