import SignIn from "./components/pages/SignIn/SignIn";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import SignUp from "./components/pages/SignUp/SignUp";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import ProtectedRoute from "./contexts/ProtectedRoute";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/" index element={<Dashboard />} />
        </Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
