import { RoutesConfig } from "@config/";

import {
  Dashboard,
  OrderManagement,
  PostManagement,
  UserManagement,
} from "@pages";

const publicRoutes = [
  {
    path: RoutesConfig.dashboard,
    component: Dashboard,
    text: "dashboard",
  },
  {
    path: RoutesConfig.order,
    component: Dashboard,
    text: "dashboard",
  },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
