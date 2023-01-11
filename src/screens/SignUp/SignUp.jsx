import { Grid } from '@mui/material';
import { authApi } from '../../store';
import { SignInSignUpForm } from '../../components';
import { TEXT } from '../../constants';

function SignUp() {
  const [signUp, { isLoading }] = authApi.useSignUpMutation();

  return (
    <Grid container height="100vh" alignItems="center" justifyContent="center">
      <SignInSignUpForm
        titleText={TEXT.SignUp.Title}
        buttonText={TEXT.SignUp.Button}
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />
    </Grid>
  );

  function handleSubmit(values) {
    signUp(values);
  }
}

export default SignUp;
