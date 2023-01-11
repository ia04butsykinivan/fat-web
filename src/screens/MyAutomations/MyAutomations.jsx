import { Stack } from '@mui/material';
import { CommonContainer } from '../../components';
import { TEXT } from '../../constants';
import { automationApi } from '../../store';
import { Automation } from './components';

function MyAutomations() {
  const { data: automations, isLoading } = automationApi.useGetAutomationsQuery();

  return (
    <CommonContainer title={TEXT.MyAutomations.Title} isLoading={isLoading}>
      <Stack spacing={2}>
        {automations && automations.map((a) => <Automation key={a.id} automation={a} />)}
      </Stack>
    </CommonContainer>
  );
}

export default MyAutomations;
