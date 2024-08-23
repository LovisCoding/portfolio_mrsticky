import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from "./components/Home/Home.jsx";
import Creations from "./components/Creations/Creations.jsx";
import Clients from "./components/Clients/Clients.jsx";

const router = createBrowserRouter( [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/creations",
        element: <Creations/>
    },
    {
        path: "/clients",
        element: <Clients/>
    }
    ]
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
