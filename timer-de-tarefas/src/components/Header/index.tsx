import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";

import Logo from "../../../public/logo.svg";

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />
      <nav>
        <ul>
          <li>
            <NavLink to="/" title="Timer">
              <Timer size={24} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/history" title="Histórico">
              <Scroll size={24} />
            </NavLink>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  );
};