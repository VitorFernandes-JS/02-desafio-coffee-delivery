import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { darkTheme } from "./styles/themes/dark";
import { Router } from "./Router";
import {
  useCoffeInformationsContext,
} from "./contexts/CoffeeInformationsContext";

export function App() {
  const { theme } = useCoffeInformationsContext();

  return (
    <ThemeProvider theme={theme === true ? defaultTheme : darkTheme}>
      <BrowserRouter>
          <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
