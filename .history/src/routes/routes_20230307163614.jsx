import { RoutesConfig } from "@config/";

// import { SignUpPage } from "@pages";

import { AuthLayout } from "@layouts";
import { lazy } from "react";

const SignUpPage = lazy(() => import("@pages/auth/SignUpPage"));
const SignIpPage = lazy(() => import("@pages/auth/SignInPage"));

const publicRoutes = [];
const privateRoutes = [
  {
    path: RoutesConfig.signup,
    component: SignUpPage,
    layout: AuthLayout,
    heading: "Sign up",
  },
  {
    path: RoutesConfig.signin,
    component: SignIpPage,
    layout: AuthLayout,
    heading: "Welcome back!",
  },
];

export { publicRoutes, privateRoutes };
