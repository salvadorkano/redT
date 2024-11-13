import {useAuth} from '../context/AuthContext';
import {UserRole} from '../context/AuthContext';

export const useRoleGuard = () => {
  const {user, hasPermission} = useAuth();

  const guardComponent = (
    requiredRoles: UserRole[],
    fallback: React.ReactNode = null,
  ) => {
    return hasPermission(requiredRoles);
  };

  return {
    guardComponent,
    userRole: user?.role,
    isAuthenticated: !!user,
  };
};
