import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../Layout/Default";
import { History } from "../pages/History";
import { Home } from "../pages/Home";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  );
};