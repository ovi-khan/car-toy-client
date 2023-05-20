import React from 'react';
import {
    createBrowserRouter
  } from "react-router-dom";
import Home from '../Pages/Home/Home/Home';
import Main from '../Layout/Main';
import CategoryTab from '../Pages/Home/CategoryTab/CategoryTab';
import AddAToy from '../Pages/AddAToy/AddAToy';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'addatoy',
                element: <AddAToy></AddAToy>
            },
            {
                path: 'categoryTab',
                element: <CategoryTab></CategoryTab>,
                // loader: ({params}) => fetch(`http://localhost:5000/cars/${params.id}`)
            }
        ]
    }
])

export default router;