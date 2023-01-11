import { Stack, Typography, TextField, Button } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  username: yup.string('Enter your username').required('Username is required'),
  password: yup.string('Enter your password').required('Password is required'),
});

function SignInSignUpForm({ titleText, buttonText, onSubmit, isLoading }) {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    onSubmit,
  });

  return (
    <Stack alignItems="center" spacing={2}>
      <Typography variant="h6" component="span">
        {titleText}
      </Typography>
      <TextField
        id="username"
        name="username"
        label="Username"
        value={formik.values.username}
        onChange={formik.handleChange}
        error={formik.touched.username && Boolean(formik.errors.username)}
        helperText={formik.touched.username && formik.errors.username}
      />
      <TextField
        id="password"
        name="password"
        label="Password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <Button variant="contained" onClick={formik.handleSubmit} disabled={isLoading}>
        {buttonText}
      </Button>
    </Stack>
  );
}

export default SignInSignUpForm;
