import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// ✅ Providers
import { ThemeProvider } from "./contexts/ThemeProvider";
import { ZenProvider } from "./contexts/ZenProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <ZenProvider>
        <App />
      </ZenProvider>
    </ThemeProvider>
  </React.StrictMode>
);
