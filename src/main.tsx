import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { QueryClientProvider } from "@tanstack/react-query";
import { tanStackClient } from "./api/tanstack-client.ts";
import { Provider } from "react-redux";

import { reduxStore } from "./redux/redux-store.ts";

import App from "./App.tsx";

import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fddb00",
      light: "#f9ed3f",
      dark: "#fea900",
      contrastText: "#000",
    },
    secondary: {
      main: "#222222",
      light: "#626262",
      contrastText: "#fff",
    },
    info: {
      main: "#699bfe",
      light: "#84b9ff",
      dark: "#5f79da",
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={tanStackClient}>
      <ThemeProvider theme={theme}>
        <Provider store={reduxStore}>
          <App />
        </Provider>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
);
