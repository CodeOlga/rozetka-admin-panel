import { Route, Routes } from "react-router-dom";
import { HistoryRouter as Router } from "redux-first-history/rr6";
import { Box } from "@mui/material";

import { routes } from "./constants/routes";
import { history } from "./redux/store";

import Layout from "./components/Layout/Layout";
// import PrivateRoute from "../src/components/PrivateRoute/PrivateRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <Box sx={{ backgroundColor: "primary.main" }}>
      <Router history={history}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route element={<PrivateRoute />}>
              {Object.keys(routes).map((item) => (
                <Route
                  key={routes[item].id}
                  element={routes[item].element}
                  path={routes[item].path}
                />
              ))}
            </Route>
          </Route>
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
