import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import routes from "./router";
import loadable, { lazy } from "@loadable/component";

const Plan = lazy(() => import("../views/plan/index"));

const AppRouter = () => {
  console.log(Plan, "Plan");
  return (
    <BrowserRouter>
      <Routes>
        <React.Suspense fallback={<div>hello loadiung</div>}>
          {/* {routes.map((route) => {
            console.log(route, "route");
            return <Route key={route.path} {...route} />;
          })} */}
          {/* <Route element={<div>error</div>} /> */}
          <Route element={<Plan />} />
        </React.Suspense>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
