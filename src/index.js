import React from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import { ToastProvider } from "react-toast-notifications";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { indigo, yellow } from "@mui/material/colors";
<<<<<<< HEAD
=======
import AdapterMoment from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
>>>>>>> main

const theme = createTheme({
  palette: {
    primary: {
      main: indigo[500],
    },
    secondary: {
      main: yellow[500],
    },
  },
});

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
<<<<<<< HEAD
      <Provider store={store}>
        <BrowserRouter>
          <ToastProvider placement="bottom-center">
            <App />
          </ToastProvider>
        </BrowserRouter>
      </Provider>
=======
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <Provider store={store}>
          <BrowserRouter>
            <ToastProvider placement="bottom-center">
              <App />
            </ToastProvider>
          </BrowserRouter>
        </Provider>
      </LocalizationProvider>
>>>>>>> main
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
