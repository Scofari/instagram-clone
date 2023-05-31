import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Auth0Provider } from "@auth0/auth0-react";
import { store } from "./redux/store";
import { UserProvider } from "./providers/UserContext";
import App from "./App";
import "./index.css";
// dev-rns61t3shkajeuax.us.auth0.com - domain
// NEj9kK4BrbwoU2nrSsEl6w4b1cDaKfSB - clienId

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<BrowserRouter>
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<Auth0Provider
					domain="dev-rns61t3shkajeuax.us.auth0.com"
					clientId="NEj9kK4BrbwoU2nrSsEl6w4b1cDaKfSB"
					authorizationParams={{
						redirect_uri: window.location.origin,
					}}
					cacheLocation="localstorage"
				>
					<UserProvider>
						<App />
					</UserProvider>
				</Auth0Provider>
				<ReactQueryDevtools />
			</QueryClientProvider>
		</Provider>
	</BrowserRouter>
);
