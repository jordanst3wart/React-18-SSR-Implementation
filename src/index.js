import React from "react";
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// TODO i don't think this is run as it's not in the main.js file that is called to bootstrap the app
console.log("hi")
hydrateRoot(
  document, // past in the complete document
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

console.log("hydrateRoot")

reportWebVitals(console.log)
