import { lazy, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtactRoute from "./Components/auth/ProtactRoute";
import Sidebar from "./Components/Sidebar";
import cookies from 'js-cookie'
import { useAuth } from "./Context/AuthContext";

// Lazy load the components
const MainContainer = lazy(() => import("./Components/MainContainer"));
const Login = lazy(() => import("./pages/Login"));
const Chat = lazy(() => import("./pages/Chat"));
const Group = lazy(() => import("./pages/Group"));
const PageNotFound = lazy(() => import('./Components/PageNotFound'));

function App() {
  // State to track the user's authentication status
  const [user, setUser] = useState(false);
  const { authUser } = useAuth(); // Getting authUser from context

  // Effect to update user state based on authUser context value
  useEffect(() => {
    if (authUser) {
      setUser(true); // If authUser exists, user is logged in
    } else {
      setUser(false); // Otherwise, user is logged out
    }
  }, [authUser]); // Only run this effect when authUser changes

  return (
    <BrowserRouter>
      <Routes>
        {/* Protecting the routes with ProtactRoute */}
        <Route element={<ProtactRoute user={user} />}>
          <Route path="/" element={<Sidebar><MainContainer /></Sidebar>} />
          <Route path="/chat/:id" element={<Sidebar><Chat /></Sidebar>} />
          <Route path="/groups" element={<Sidebar><Group /></Sidebar>} />
        </Route>

        {/* Login route */}
        <Route
          path="/login"
          element={
            <ProtactRoute user={!user} redirect="/">
              <Login />
            </ProtactRoute>
          }
        />

        {/* Catch-all route for 404 page */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
