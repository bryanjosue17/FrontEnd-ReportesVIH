import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { ToastProvider } from "react-toast-notifications";
import store from "./store/store";
import AdapterMoment from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
ReactDOM.render(
  <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
    <ToastProvider>
      <App />
    </ToastProvider>
    </LocalizationProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();