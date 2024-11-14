import { lazy, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtactRoute from "./Components/auth/ProtactRoute";
import Sidebar from "./Components/Sidebar";


const MainContainer = lazy(() => import("./Components/MainContainer"));
const Login = lazy(() => import("./pages/Login"));
const Chat = lazy(() => import("./pages/Chat"));
const Group = lazy(() => import("./pages/Group"));
const PageNotFound =lazy(()=>import('./Components/PageNotFound'))
function App() {
  const user = true;
  return (
    <BrowserRouter>
    
    
      <Routes>
        <Route element={<ProtactRoute user={user} />}>
          <Route path="/" element={<Sidebar><MainContainer/></Sidebar>} />

          <Route path="/chat/:id" element={<Sidebar><Chat/></Sidebar>} />
          <Route path="/groups" element={<Sidebar><Group/></Sidebar>} />
        </Route>
        <Route
          path="/login"
          element={
            <ProtactRoute user={!user} redirect="/">
              <Login />
            </ProtactRoute>
          }
        />
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
