import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().min(3).max(20).required(),
  email: yup.string().email().required(),
  contact: yup
    .string()
    .required('Contact number is required')
    .matches(/^[0-9]+$/, 'Contact number must contain only digits')
    .min(10, 'Contact number must be at least 10 digits')
    .max(10, 'Contact number cannot exceed 10 digits'),
  message: yup.string().required(),
});

export default schema;
