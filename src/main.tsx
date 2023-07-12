import { Auth0Provider } from "@auth0/auth0-react";
import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import "./index.css";
import { UserProvider } from "./providers/UserContext";
import { store } from "./redux/store";
import { ScrollToTop } from "./components/ScrollToTop";
import { StrictMode } from "react";
// dev-rns61t3shkajeuax.us.auth0.com - domain
// NEj9kK4BrbwoU2nrSsEl6w4b1cDaKfSB - clienId

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <Auth0Provider
                        domain="dev-rns61t3shkajeuax.us.auth0.com"
                        clientId="NEj9kK4BrbwoU2nrSsEl6w4b1cDaKfSB"
                        authorizationParams={{
                            redirect_uri: window.location.origin,
                        }}
                        // cacheLocation="localstorage"
                    >
                        <UserProvider>
                            <ScrollToTop />
                            <ToastContainer
                                position="top-center"
                                theme="dark"
                                closeButton={false}
                                autoClose={3000}
                            />
                            <App />
                            <ReactQueryDevtools />
                        </UserProvider>
                    </Auth0Provider>
                </QueryClientProvider>
            </Provider>
        </BrowserRouter>
    </StrictMode>
);
