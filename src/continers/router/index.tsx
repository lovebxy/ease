import React, { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import routes from "./router";
import SiderBar from 'common/components/Sider';
import Error from 'common/components/Error';

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
          <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
