// Xây dựng các router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Admin from "../pages/administration/Admin";

const RouteSetUp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />}></Route>
      </Routes>

      <Routes>
        <Route path="admin" element={<Admin />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSetUp;
