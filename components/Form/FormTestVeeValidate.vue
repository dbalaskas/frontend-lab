<script lang="ts" setup>
import { isYupFieldRequired } from '~/app/utils/yup';
import { testVeeValidateSchema, type ITestVeeValidateData } from '~/app/services/Yup/YupSchemas/TestVeeValidate';

const initialValues = ref<ITestVeeValidateData>({
  full_name: 'Dionysis',
  email: '',
  job_name: '',
  company_name: ''
});

const onSubmit = (values: any): void => {
  // eslint-disable-next-line no-console
  console.log(values);
};

const onReset = (): void => {
  // eslint-disable-next-line no-console
  console.log('reset form');
};
</script>

<template>
  <base-vee-validate-form
    :schema="testVeeValidateSchema"
    :initial-values="initialValues"
    submit-label="Save Now bitch"
    show-submit
    show-reset
    class="space-y-4"
    @submit="onSubmit"
    @reset="onReset"
  >
    <base-vee-validate-input
      placeholder="Full Name"
      label="Full Name"
      name="full_name"
      :required="isYupFieldRequired(testVeeValidateSchema, 'full_name')"
    />
    <base-vee-validate-input
      placeholder="Email"
      label="Email"
      name="email"
      :required="isYupFieldRequired(testVeeValidateSchema, 'email')"
    />
    <base-vee-validate-input
      placeholder="Job Name"
      label="Job Name"
      name="job_name"
      :required="isYupFieldRequired(testVeeValidateSchema, 'job_name')"
    />
    <base-vee-validate-input
      placeholder="Company Name"
      label="Company Name"
      name="company_name"
      :required="isYupFieldRequired(testVeeValidateSchema, 'company_name')"
    />
  </base-vee-validate-form>
</template>

<style lang="css" scoped>

</style>
