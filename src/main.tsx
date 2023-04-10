// import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./App";
import ModalContext from "./providers/ModalContext";
import { store } from "./redux/store";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	// <StrictMode>
	<BrowserRouter>
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<ModalContext>
					<App />
				</ModalContext>
				<ReactQueryDevtools />
			</QueryClientProvider>
		</Provider>
	</BrowserRouter>
	// </StrictMode>
);

//
