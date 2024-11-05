import yup from '~/app/services/Yup/YupExtend';

export type ITestVeeValidateData = {
  full_name: string;
  email: string;
  job_name: string;
  company_name: string;
};

export const testVeeValidateSchema = yup.object().shape({
  full_name: yup.string().required().min(6, 'Full Name must be at least 6 characters'),
  email: yup.string().email().required(),
  job_name: yup.string(),
  company_name: yup.string().required('Company Name field is required')
});
