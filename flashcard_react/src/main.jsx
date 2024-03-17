import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./router/index.jsx";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(

        <RouterProvider router={router}>
            <App/>
        </RouterProvider>

    
)
