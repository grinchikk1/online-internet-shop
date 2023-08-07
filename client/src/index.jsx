import { ThemeProvider } from "@emotion/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { store } from "./store/store";
import { theme as globalTheme } from "./styles/GlobalTheme";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ThemeProvider theme={globalTheme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </Provider>
);
