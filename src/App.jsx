import { Route, Routes } from "react-router-dom";
import routes from "./routes";

const App = () => (
  <div className="wrapper">
    <Routes>
      <Route>
        {routes.map((routes, index) => {
          const { path, component: Component } = routes;
          return <Route key={index} path={path} element={<Component />} />;
        })}
      </Route>
    </Routes>
  </div>
);
export default App;
