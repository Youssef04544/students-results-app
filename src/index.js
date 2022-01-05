import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import client from "./react-query-client";

ReactDOM.render(
  <QueryClientProvider client={client}>
    <App />
    <ReactQueryDevtools />
  </QueryClientProvider>,
  document.getElementById("root")
);
