import { RoutesConfig } from "@config/";

// import { SignUpPage } from "@pages";

import { AuthLayout } from "@layouts";
import { lazy } from "react";

const SignUpPage = lazy(() => import("@pages"));

const publicRoutes = [
  // {
  //   path: RoutesConfig.dashboard,
  //   component: Dashboard,
  //   text: "dashboard",
  // },
  // {
  //   path: RoutesConfig.order,
  //   component: OrderManagement,
  //   text: "order",
  // },
  // {
  //   path: RoutesConfig.post,
  //   component: PostManagement,
  //   text: "post",
  // },
  // {
  //   path: RoutesConfig.user,
  //   component: UserManagement,
  //   text: "user",
  // },
];
const privateRoutes = [
  // {
  //   path: RoutesConfig.login,
  //   component: Login,
  //   layout: AuthLayout,
  // },
  // {
  //   path: RoutesConfig.register,
  //   component: Register,
  //   layout: AuthLayout,
  // },
  {
    path: RoutesConfig.signup,
    component: SignUpPage,
    layout: AuthLayout,
  },
];

export { publicRoutes, privateRoutes };
