import { useSelector } from 'react-redux';

function useAuth() {
  const { token } = useSelector((state) => state.authSlice);

  return !!token;
}

export default useAuth;
