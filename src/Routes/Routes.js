import { createBrowserRouter } from "react-router-dom";
import Error from "../components/Error/Error";
import Home from "../components/Home/Home/Home";
import AddService from "../components/Pages/AddService/AddService";
import Blogs from "../components/Pages/Blogs/Blogs";
import Login from "../components/Pages/Login/Login";
import MyReview from "../components/Pages/MyReview/MyReview";
import ServiceDetails from "../components/Pages/ServiceDetails/ServiceDetails";
import Services from "../components/Pages/Services/Services";
import SignUp from "../components/Pages/SignUp/SignUp";
import Main from "../Layout/Main";

import PrivateRoutes from "./PrivateRoutes";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://b610-lerning-platform-server-side-imtiaz-uddin28.vercel.app/course')
            },
            {
                path: '/home',
                element: <Home></Home>,
            },
            
            {
                path: '/myreviews',
                element: <PrivateRoutes><MyReview></MyReview></PrivateRoutes>,
                loader: ({params}) => fetch(`https://b610-lerning-platform-server-side-imtiaz-uddin28.vercel.app/course/${params.id}`)
            },
            {
                path: '/addservice',
                element: <PrivateRoutes><AddService></AddService></PrivateRoutes>,
                loader: ({params}) => fetch(`https://b610-lerning-platform-server-side-imtiaz-uddin28.vercel.app/course/${params.id}`)
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('https://b610-lerning-platform-server-side-imtiaz-uddin28.vercel.app/course')
            },
            {
                path: '/service',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params}) => fetch(`https://b610-lerning-platform-server-side-imtiaz-uddin28.vercel.app/course/${params.id}`)
            },
            
            
            {
                path: '/blogs',
                element: <Blogs></Blogs> 
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/signup',
                element: <SignUp></SignUp>
            },
            {
                path:'*',
                element: <Error></Error>
            }
        ]
    }
])