import type { RouteObject } from "react-router";

const routes: RouteObject[] = [
	{
		path: "/",
		lazy: {
			Component: async () => (await import("./pages/landing/LandingPage")).default,
		},
	},
	{
		path: "/authentication",
		lazy: {
			Component: async () => (await import("./pages/authentication/AuthenticationPage")).default,
		},
	},
	{
		path: "/dashboard",
		lazy: {
			Component: async () => (await import("./pages/dashboard/DashboardPage")).default,
		},
	},
];

export default routes;
