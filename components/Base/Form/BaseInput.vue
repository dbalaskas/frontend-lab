<script lang="ts" setup>
interface Props {
  name?: string;
  label?: string;
  placeholder?: string;
  info?: string;
  disabled?: boolean;
  inputClass?: string;
  errors?: string[];
  required?: boolean;
  valid?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  name: undefined,
  label: undefined,
  info: undefined,
  placeholder: 'Type something...',
  inputClass: undefined,
  errors: undefined,
  reuired: false,
  valid: false
});

const modelValue = defineModel<string | undefined>({ required: true });

const inputLabel = computed(() => props.label || props.name);
const inputPlaceholder = computed(() => props.placeholder || props.label || props.name);

const hasErrors = computed(() => !!props.errors && props.errors.length > 0);
const isValid = computed(() => !!props.valid && !!modelValue.value);

const showInfoTooltip = ref(false);
</script>

<template>
  <div class="flex flex-col space-y-1">
    <div class="flex items-center space-x-2 text-gray-700">
      <label
        v-if="inputLabel"
        :for="name"
        class="text-lg font-semibold"
      >
        <span>
          {{ inputLabel }}
        </span>
        <span
          v-if="props.required"
          class="text-red-500 ml-1"
        >*</span>
      </label>
      <div
        v-if="info"
        class="relative flex rounded-full p-0.5 hover:bg-gray-100"
        @mouseover="showInfoTooltip = true"
        @mouseleave="showInfoTooltip = false"
      >
        <icon
          name="uil:info-circle"
        />
        <div
          v-show="showInfoTooltip"
          class="absolute z-10 transform left-full ml-2 w-max max-w-96 px-2 py-1 text-sm text-black bg-gray-300 rounded-md shadow-lg"
        >
          {{ info }}
        </div>
      </div>
    </div>

    <input
      :id="name"
      v-model="modelValue"
      type="text"
      :class="[
        { 'border-red-500': hasErrors, 'border-green-500': isValid },
        'border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full',
        inputClass
      ]"
      :placeholder="inputPlaceholder"
      :disabled="props.disabled"
    >

    <div
      v-if="errors?.length > 0"
      class="text-sm text-red-500"
    >
      <p
        v-for="error in errors"
        :key="error"
      >
        {{ error }}
      </p>
    </div>
  </div>
</template>

<style lang="css" scoped>

</style>
