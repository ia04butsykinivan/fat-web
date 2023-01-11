import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ROUTES } from '../constants';
import { SignIn, SignUp, MyAutomations, CreateAutomation } from '../screens';

import AuthorizedRoute from './AuthorizedRoute';
import UnauthorizedRoute from './UnauthorizedRoute';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<UnauthorizedRoute />}>
          <Route element={<SignIn />} path={ROUTES.SIGN_IN} />
          <Route element={<SignUp />} path={ROUTES.SIGN_UP} />
        </Route>
        <Route element={<AuthorizedRoute />} exact path="/">
          <Route element={<Navigate to={ROUTES.MY_AUTOMATIONS} replace />} index />

          <Route element={<MyAutomations />} path={ROUTES.MY_AUTOMATIONS} />
          <Route element={<CreateAutomation />} path={ROUTES.CREATE_AUTOMATION} />
        </Route>
        <Route element={<div />} path="*" />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
