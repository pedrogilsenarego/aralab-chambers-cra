/* eslint-disable @typescript-eslint/no-explicit-any */
import { ROUTE_PATHS } from "../constants/routes";
import MainLayout from "../layouts/MainLayout";
import { lazyWithRetryAndLoader } from "../utils/lazyWithRetry";
import { AppRoute } from "./types";

const Home = lazyWithRetryAndLoader(() => import("../modules/Home"));

export const routes: AppRoute[] = [
  {
    path: ROUTE_PATHS.HOME,
    component: (
      <MainLayout marginBottom="0vh">
        <Home />
      </MainLayout>
    ),
  },
];
