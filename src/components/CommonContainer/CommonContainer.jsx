import { CircularProgress, Stack, Typography } from '@mui/material';

function CommonContainer({ title, isLoading, children }) {
  return (
    <Stack>
      <Stack mb={4}>
        <Typography variant="h4" component="span">
          {title}
        </Typography>
      </Stack>
      {isLoading ? (
        <Stack alignItems="center">
          <CircularProgress />
        </Stack>
      ) : (
        <Stack>{children}</Stack>
      )}
    </Stack>
  );
}

export default CommonContainer;
