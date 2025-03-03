import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "aos/dist/aos.css";
import "remixicon/fonts/remixicon.css";
import {Toaster} from "react-hot-toast"


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <Toaster
    position="top-center"
    reverseOrder={false}
  /> 
    <App />
  </React.StrictMode>
);
