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

const router = createBrowserRouter( [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/creations",
        element: <Creations/>
    }
    ]
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
