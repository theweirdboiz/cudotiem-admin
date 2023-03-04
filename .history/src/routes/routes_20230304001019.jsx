import { RoutesConfig } from "@config/";

import {
  Dashboard,
  OrderManagement,
  PostManagement,
  UserManagement,
  Login,
  Register,
  ForgetPassword,
} from "@pages";

import { AuthLayout } from "@layouts";

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
  {
    path: RoutesConfig.user,
    component: UserManagement,
    text: "user",
  },
];
const privateRoutes = [
  {
    path: RoutesConfig.login,
    component: Login,
    layout: null,
  },
  {
    path: RoutesConfig.register,
    component: Register,
    layout: null,
  },
  {
    path: RoutesConfig.forget,
    component: ForgetPassword,
    layout: AuthLayout,
  },
];

export { publicRoutes, privateRoutes };
