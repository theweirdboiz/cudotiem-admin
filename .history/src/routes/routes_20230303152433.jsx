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
    component: OrderManagement,
    text: "order",
  },
  {
    path: RoutesConfig.post,
    component: PostManagement,
    text: "post",
  },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
