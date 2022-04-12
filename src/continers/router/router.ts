/* eslint-disable import/no-anonymous-default-export */
import { lazy } from "react";

export default [
  {
    path: "/plan",
    element: lazy(() => import("../views/plan/index")),
    exact: true,
  },
  {
    path: "/",
    element: lazy(() => import("../views/index")),
    exact: true,
  },
];
