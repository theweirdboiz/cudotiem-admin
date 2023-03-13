import { RoutesConfig } from "@config/";

import { AuthLayout, DefaultLayout } from "@layouts";
import { lazy } from "react";

const SignUpPage = lazy(() => import("@pages/auth/SignUpPage"));
const SignIpPage = lazy(() => import("@pages/auth/SignInPage"));
const ForgotPassowrdPage = lazy(() => import("@pages/auth/ForgotPasswordPage"));
const ResetPasswordPage = lazy(() => import("@pages/auth/ResetPasswordPage"));

const DashboardPage = lazy(() => import("@pages/dashboard/DashboardPage"));
const PostsPage = lazy(() => import("@pages/posts/PostsPage"));
const OrdersPage = lazy(() => import("@pages/orders/OrdersPage"));

const publicRoutes = [
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
  {
    path: RoutesConfig.forgot,
    component: ForgotPassowrdPage,
    layout: AuthLayout,
    heading: "Forgot password",
  },
  {
    path: RoutesConfig.reset,
    component: ResetPasswordPage,
    layout: AuthLayout,
    heading: "Reset password",
  },
];
const privateRoutes = [
  {
    path: RoutesConfig.dashboard,
    component: DashboardPage,
    layout: DefaultLayout,
  },
  {
    path: RoutesConfig.posts,
    component: PostsPage,
    layout: DefaultLayout,
  },
  {
    path: RoutesConfig.orders,
    component: OrdersPage,
    layout: DefaultLayout,
  },
];

export { publicRoutes, privateRoutes };
