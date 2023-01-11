import { Container, Paper, Stack } from '@mui/material';
import { Navigation } from './components/Navigation';

function AuthorizedRoute({ children }) {
  return (
    <>
      <Navigation />
      <Stack ml="120px">
        <Container maxWidth="md">
          <Paper
            sx={{
              my: 2,
              p: 2,
            }}
          >
            {children}
          </Paper>
        </Container>
      </Stack>
    </>
  );
}

export default AuthorizedRoute;
