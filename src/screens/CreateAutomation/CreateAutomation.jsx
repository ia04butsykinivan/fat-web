import { useState } from 'react';
import { Select, MenuItem, FormControl, Stack, InputLabel, Button } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { serviceApi, automationApi } from '../../store';
import { CommonContainer } from '../../components';
import { TEXT } from '../../constants';

const validationSchema = yup.object({
  triggerId: yup.string('Select a trigger').required('Trigger is required'),
  actionId: yup.string('Select an action').required('Action is required'),
});

function CreateAutomation() {
  const [triggerServiceId, setTriggerServiceId] = useState('');
  const [actionServiceId, setActionServiceId] = useState('');

  const { data: services, isLoading } = serviceApi.useGetServicesQuery();
  const [createAutomation, { isLoading: isCreatingAutomation }] =
    automationApi.useCreateAutomationMutation();

  const formik = useFormik({
    initialValues: {
      triggerId: '',
      actionId: '',
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  const triggerService = services && services.find((s) => s.id === triggerServiceId);
  const actionService = services && services.find((s) => s.id === actionServiceId);

  return (
    <CommonContainer title={TEXT.CreateAutomation.Title} isLoading={isLoading}>
      <Stack alignItems="center" spacing={4}>
        <FormControl sx={{ minWidth: 240 }}>
          <InputLabel id="trigger-service-label">
            {TEXT.CreateAutomation.Selects.TriggerService}
          </InputLabel>
          <Select
            id="trigger-service"
            labelId="trigger-service-label"
            label={TEXT.CreateAutomation.Selects.TriggerService}
            value={triggerServiceId}
            onChange={handleChangeTriggerServiceId}
          >
            {services &&
              services.map((s) => (
                <MenuItem key={s.id} value={s.id}>
                  {s.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 240 }}>
          <InputLabel id="trigger-label">{TEXT.CreateAutomation.Selects.Trigger}</InputLabel>
          <Select
            name="triggerId"
            id="trigger"
            labelId="trigger-label"
            label={TEXT.CreateAutomation.Selects.Trigger}
            value={formik.values.triggerId}
            onChange={formik.handleChange}
            disabled={!triggerService}
          >
            {triggerService &&
              triggerService.triggers.map((t) => (
                <MenuItem key={t.id} value={t.id}>
                  {t.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 240 }}>
          <InputLabel id="action-service-label">
            {TEXT.CreateAutomation.Selects.ActionService}
          </InputLabel>
          <Select
            id="action-service"
            labelId="action-service-label"
            label={TEXT.CreateAutomation.Selects.ActionService}
            value={actionServiceId}
            onChange={handleChangeActionServiceId}
          >
            {services &&
              services.map((s) => (
                <MenuItem key={s.id} value={s.id}>
                  {s.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 240 }}>
          <InputLabel id="action-label">{TEXT.CreateAutomation.Selects.Action}</InputLabel>
          <Select
            name="actionId"
            id="action"
            labelId="action-label"
            label={TEXT.CreateAutomation.Selects.Action}
            value={formik.values.actionId}
            onChange={formik.handleChange}
            disabled={!actionService}
          >
            {actionService &&
              actionService.actions.map((a) => (
                <MenuItem key={a.id} value={a.id}>
                  {a.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <Button variant="contained" onClick={formik.handleSubmit} disabled={isCreatingAutomation}>
          {TEXT.CreateAutomation.Button}
        </Button>
      </Stack>
    </CommonContainer>
  );

  function handleSubmit(values) {
    createAutomation(values);
  }

  function handleChangeTriggerServiceId(e) {
    setTriggerServiceId(e.target.value);

    formik.setFieldValue('triggerId', '');
  }

  function handleChangeActionServiceId(e) {
    setActionServiceId(e.target.value);

    formik.setFieldValue('actionId', '');
  }
}

export default CreateAutomation;
