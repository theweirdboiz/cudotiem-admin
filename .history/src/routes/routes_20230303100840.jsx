import { RoutesConfig } from "@config/";

import {
  Dashboard,
  OrderManagement,
  PostManagement,
  UserManagement,
} from "@pages";

const publicRoutes = [
  {
    path: RoutesConfig.routes.dashboard,
    component: Dashboards,
  },
];
const privateRoutes = [];
