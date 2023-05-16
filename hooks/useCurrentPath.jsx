import { matchPath, useLocation } from 'react-router-dom';

const routes = [{ path: '/members/:id' }];

const useCurrentPath = () => {
  const { pathname } = useLocation();

  return matchPath(pathname, routes)?.path;
};

export default useCurrentPath;
