import React from 'react';
import {
    createBrowserRouter
  } from "react-router-dom";
import Home from '../Pages/Home/Home/Home';
import Main from '../Layout/Main';
import CategoryTab from '../Pages/Home/CategoryTab/CategoryTab';
import AddAToy from '../Pages/AddAToy/AddAToy';
import CarDetails from '../Pages/CarDetails/CarDetails';
import LogIn from '../Pages/Login/Login';


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
                path: 'login',
                element: <LogIn></LogIn>
            },
            {
                path: 'categoryTab',
                element: <CategoryTab></CategoryTab>
            },
            {
                path: '/carDetails/:id',
                element: <CarDetails></CarDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/cars/${params.id}`)
            }
        ]
    }
])

export default router;