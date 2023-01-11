import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { CoffeeInformationsContextProvider } from "./contexts/CoffeeInformationsContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CoffeeInformationsContextProvider>
      <App />
    </CoffeeInformationsContextProvider>
  </React.StrictMode>
);
