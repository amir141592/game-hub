import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { QueryClientProvider } from "@tanstack/react-query";
import { tanStackClient } from "./api/tanstack-client.ts";

import App from "./App.tsx";

import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const theme = createTheme({
	palette: {
		primary: {
			light: "#f9ed3f",
			main: "#fddb00",
			dark: "#fea900",
			contrastText: "#000",
		},
		secondary: {
			light: "#626262",
			main: "#222222",
			contrastText: "#fff",
		},
		info: {
			light: "#84b9ff",
			main: "#699bfe",
			dark: "#5f79da",
		},
	},
});

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<QueryClientProvider client={tanStackClient}>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</QueryClientProvider>
	</StrictMode>
);
