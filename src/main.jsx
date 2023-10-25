import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { EmailContextProvider } from "./context/EmailContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EmailContextProvider>
      <App />
    </EmailContextProvider>
  </React.StrictMode>
);
