import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
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
    <BrowserRouter>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ModalContext>
            <App />
            <ReactQueryDevtools />
          </ModalContext>
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

//
