<script lang="ts" setup>
interface Props {
  schema: any;
  initialValues: any;
  submitLabel?: string;
  resetLabel?: string;
  showSubmit?: boolean;
  showReset?: boolean;
}

interface Emits {
  (_event: 'submit', _payload: any): void;
  (_event: 'reset'): void;
}

const emit = defineEmits<Emits>();
const props = withDefaults(defineProps<Props>(), {
  schema: undefined,
  initialValues: undefined,
  submitLabel: 'Save',
  resetLabel: 'Reset',
  showSubmit: false,
  showReset: false
});

const { handleSubmit, resetForm, setValues } = useForm({
  validationSchema: props.schema,
  initialValues: props.initialValues
});

const internalValues = ref({ ...props.initialValues });

watch(
  () => props.initialValues,
  (newValues) => {
    internalValues.value = { ...newValues };
    setValues(internalValues.value);
  },
  { deep: true, immediate: true }
);

const onSubmit = (): void => {
  handleSubmit((values: any) => {
    emit('submit', values);
  });
};

const onReset = (): void => {
  resetForm({ values: internalValues.value });
  emit('reset');
};
</script>

<template>
  <form @submit.prevent="onSubmit">
    <slot />

    <div class="flex gap-2 mt-4">
      <button
        v-if="showSubmit"
        type="submit"
        class="h-9 px-5 bg-green-500 text-white rounded"
      >
        {{ submitLabel }}
      </button>
      <button
        v-if="showReset"
        type="reset"
        class="h-9 px-5 bg-green-500 text-white rounded"
        @click="onReset"
      >
        {{ resetLabel }}
      </button>
    </div>
  </form>
</template>

<style lang="css" scoped>

</style>
