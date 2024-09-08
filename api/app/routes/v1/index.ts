import usersRoute from './users/route';
import authRoute from './auth/route';
import { IRoutes, IRoute } from '../../types';

const routes: IRoutes = [
  {
    url: 'users',
    route: usersRoute,
  },
  {
    url: 'auth',
    route: authRoute,
  },
];

export default routes.map((e: IRoute) => {
  e.url = `v1/${e.url}`;
  return e;
});
