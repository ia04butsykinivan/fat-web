import { Card, Typography, Stack, IconButton } from '@mui/material';
import { PlayCircleFilledWhite as PlayCircleFilledWhiteIcon } from '@mui/icons-material';
import { automationApi } from '../../../../store';

function Automation({ automation }) {
  const [triggerAutomation, { isLoading }] = automationApi.useTriggerAutomationMutation();

  return (
    <Card sx={{ p: 2 }}>
      <Stack spacing={2}>
        <Stack alignSelf="flex-start">
          <IconButton onClick={handleClick} disabled={isLoading}>
            <PlayCircleFilledWhiteIcon />
          </IconButton>
        </Stack>
        <Typography>{`Trigger: ${automation.trigger.name}`}</Typography>
        <Typography>{`Action: ${automation.action.name}`}</Typography>
      </Stack>
    </Card>
  );

  function handleClick() {
    triggerAutomation({ id: automation.id });
  }
}

export default Automation;
