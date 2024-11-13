import {useAuth} from '../context/AuthContext';

export const useAppContext = () => {
  const auth = useAuth();

  return {
    auth,
  };
};
