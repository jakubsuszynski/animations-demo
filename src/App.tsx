import React from "react";
import "./App.css";
import {createBrowserRouter, NavLink, Outlet, RouterProvider} from "react-router-dom";
import Flames from "./Flames/Flames.tsx";
import ViewTransition from "./VIewTransition/ViewTransition.tsx";
import ImageDetailsRoute from "./VIewTransition/Details/Details.tsx";

const Layout = () => {
    return <div className={"wrapper"}>
        <Outlet/>
        <div className={"links"}>
            <NavLink to="/flames">Flames</NavLink>
            <NavLink to="/transition">Transition</NavLink>
        </div>
    </div>
}

const router = createBrowserRouter(
    [
        {
            path: "/",
            Component: Layout,
            children: [
                {
                    path: "flames",
                    Component: Flames,
                },
                {
                    path: "transition",
                    Component: ViewTransition,
                },
                {
                    path: "transition/:id",
                    Component: ImageDetailsRoute,
                },
            ],
        },
    ],
    {
        basename: "/",
    }
);

const App = () => {

    return <RouterProvider router={router}/>;
};

export default App;
