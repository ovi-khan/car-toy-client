import React from 'react';
import {
    createBrowserRouter
  } from "react-router-dom";
import Home from '../Pages/Home/Home/Home';
import Main from '../Layout/Main';
import CategoryTab from '../Pages/Home/CategoryTab/CategoryTab';
import AddAToy from '../Pages/AddAToy/AddAToy';
import CarDetails from '../Pages/CarDetails/CarDetails';
import LogIn from '../Pages/Login/LogIn';
import SignUp from '../Pages/SignUp/SignUp';
import PrivateRoute from './PrivateRoute';
import MyToys from '../Pages/MyToys/MyToys';
import ErrorPage from '../Pages/Home/ErrorPage/ErrorPage';
import Blog from '../Pages/Blog/Blog';
import UpdateToy from '../Pages/UpdateToy/UpdateToy';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
                path: 'mytoys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
                loader: () => fetch('https://toy-marketplace-server-ovi-khan.vercel.app/toys')
            },
            {
                path: 'login',
                element: <LogIn></LogIn>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'categoryTab',
                element: <CategoryTab></CategoryTab>
            },
            {
                path: 'updatetoy',
                element: <UpdateToy></UpdateToy>
            },
            {
                path: '/carDetails/:id',
                element: <PrivateRoute><CarDetails></CarDetails></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/cars/${params.id}`)
            }
        ]
    }
])

export default router;