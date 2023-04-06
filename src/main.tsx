import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ModalContext from "./providers/ModalContext";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<ModalContext>
					<Provider store={store}>
						<App />
					</Provider>
				</ModalContext>
			</BrowserRouter>
		</QueryClientProvider>
	</React.StrictMode>
);

//
