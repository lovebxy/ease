import React, { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import routes from "./router";
import SiderBar from '../../common/components/Sider';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
          {routes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <Suspense fallback={<div>loading</div>}>
                    <SiderBar>
                      <route.element />
                    </SiderBar>
                    
                  </Suspense>
                }
              />
            );
          })}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
