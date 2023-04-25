import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Auth0Provider } from "@auth0/auth0-react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Create a client
const queryClient = new QueryClient();
// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-7eeqtn215gqpzr3h.us.auth0.com"
      clientId="M8li9Cj60iX2IGP6t5cM8HtxWrhD3bWM"
      authorizationParams={window.location.origin}
      // redirectUri={window.location.origin}
    >
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
          <ToastContainer />
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </Auth0Provider>
  </React.StrictMode>
);
