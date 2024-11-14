import { lazy, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtactRoute from "./Components/auth/ProtactRoute";

const MainContainer = lazy(() => import("./Components/MainContainer"));
const Login = lazy(() => import("./pages/Login"));
const Chat = lazy(() => import("./pages/Chat"));
const Group = lazy(() => import("./pages/Group"));

function App() {
  const user = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtactRoute user={user} />}>
          <Route path="/" element={<MainContainer />} />

          <Route path="/chat/:id" element={<Chat />} />
          <Route path="/groups" element={<Group />} />
        </Route>
        <Route
          path="/login"
          element={
            <ProtactRoute user={!user} redirect="/">
              <Login />
            </ProtactRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
