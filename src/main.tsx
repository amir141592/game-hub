import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
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
		<ThemeProvider theme={theme}>
			<Provider store={reduxStore}>
				<App />
			</Provider>
		</ThemeProvider>
	</StrictMode>
);
