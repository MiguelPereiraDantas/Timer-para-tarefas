import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { CyclesContextProvider } from "./pages/contexts/CyclesContext";

import { Router } from "./routes";
import { GlobalStyle } from "./styles/global";

import { defaultTheme } from "./styles/theme/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}