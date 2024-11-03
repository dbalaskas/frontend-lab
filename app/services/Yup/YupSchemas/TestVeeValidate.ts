import yup from '~/app/services/Yup/YupExtend';

export type ITestVeeValidate = {
  full_name: string;
  email: string;
  job_name: string;
  company_name: string;
};

export const testVeeValidateSchem = yup.object().shape({
  full_name: yup.string().required().min(6),
  email: yup.string().email().required(),
  job_type: yup.string().required('Job Type field is required'),
  company_name: yup.string().required('Company Name field is required')
});
