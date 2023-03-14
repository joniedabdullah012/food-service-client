import Main from "../Layout/Main";
import AddService from "../Pages/AddService/AddService";
import BlogSection from "../Pages/Blog/BlogSection";
import Edit from "../Pages/Edit/Edit";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import MyReviews from "../Pages/MyReviews/MyReviews";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import Reviews from "../Pages/Reviews/Reviews";
import ReviewsDetails from "../Pages/ReviewsDetails/ReviewsDetails";
import ReviewsForm from "../Pages/ReviewsForm/ReviewsForm";
import Services from "../Pages/Shared/services/Services";
import ServicesCard from "../Pages/Shared/servicesCard/servicesCard";
import Signup from "../Pages/signup/Signup";

const { createBrowserRouter } = require("react-router-dom");

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
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/reviews/:id',
                element: <Reviews></Reviews>,
                loader: ({ params }) => fetch(`https://food-services-server.vercel.app/homeservices/${params.id}`)
            },
            {
                path: '/myreviews',
                element: <PrivateRoute>
                    <MyReviews></MyReviews>
                </PrivateRoute>
            },
            {
                path: '/edit',
                element: <Edit></Edit>
            },
            {
                path: '/addservice',
                element: <AddService></AddService>
            },
            {
                path: '/blog',
                element: <BlogSection></BlogSection>
            }


        ]

    }
])

export default router;