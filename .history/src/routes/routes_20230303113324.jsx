import { RoutesConfig } from "@config/";

import {
  Dashboard,
  OrderManagement,
  PostManagement,
  UserManagement,
} from "@pages";

console.log({ RoutesConfig });
const publicRoutes = [
  {
    path: RoutesConfig.routes.dashboard,
    component: Dashboard,
  },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
