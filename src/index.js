import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ReactGA4 from "react-ga4";
try {
  ReactGA4.initialize([
    {
      trackingId: "G-38QH77R2NN",
      gaOptions: { debug_mode: false },
      gtagOptions: { debug_mode: false },
    },
  ]);
} catch (err) {
  console.error(err);
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
