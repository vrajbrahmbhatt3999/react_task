import { useSelector } from 'react-redux';

function useAuth() {

  const isAuthenticated = useSelector((state) => state?.login?.isAuthenticated);

  return { isAuthenticated };

}

export default useAuth;
