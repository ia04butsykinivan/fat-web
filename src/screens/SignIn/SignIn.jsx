import { Grid } from '@mui/material';
import { authApi } from '../../store';
import { SignInSignUpForm } from '../../components';
import { TEXT } from '../../constants';

function SignIn() {
  const [signIn, { isLoading }] = authApi.useSignInMutation();

  return (
    <Grid container height="100vh" alignItems="center" justifyContent="center">
      <SignInSignUpForm
        titleText={TEXT.SignIn.Title}
        buttonText={TEXT.SignIn.Button}
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />
    </Grid>
  );

  function handleSubmit(values) {
    signIn(values);
  }
}

export default SignIn;
