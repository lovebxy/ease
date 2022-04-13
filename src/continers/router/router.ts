import { lazy } from "react";

export default [
  {
    path: "/plan",
    element: lazy(() => import("../views/plan/index")),
    exact: true,
  },
  {
    path: "/",
    element: lazy(() => import("../views/Index/index")),
    exact: true,
  },
];
