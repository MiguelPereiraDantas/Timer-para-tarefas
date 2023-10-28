import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { LayoutContainer } from "./style";

export const DefaultLayout = () => {
  return (
    <LayoutContainer>
      <Header />

      <Outlet />
    </LayoutContainer>
  );
};