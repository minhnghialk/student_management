// Xây dựng các router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";

const RouteSetUp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSetUp;
