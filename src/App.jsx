import React, { lazy , Suspense } from "react"
import ReactDOM from 'react-dom/client'
import '../index.css'
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import Body, { SearchFood } from "./components/Body"
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom"
//import About from "./components/About"
import ErrorPage from "./components/ErrorPage"
// import Contact from "./components/Contact"
import Restaurant from "./components/Restaurant"
import Profile from "./components/Profile"
import Schimmer from "./components/Schimmer"
const Contact = lazy(()=>import('./components/Contact'))
const About = lazy(()=>import('./components/About'))
    const Page = () =>(
        <div className="bg-neutral-100">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Page/>,
            errorElement:<ErrorPage/>,
            children:[{
                element:<Body/>,
                path:"/"
            },{
                element:<Suspense fallback={<Schimmer/>}><About/></Suspense>,
                path:"/about",
                children:[{
                    path:'profile',
                    element:<Profile/>
                }]
            },{
                path:'/contact',
                element:<Suspense fallback={<Schimmer/>}><Contact/></Suspense>
            },{
                path:'/restaurant/:id',
                element:<Restaurant/>
            }]
        }
    ]);
    const root = ReactDOM.createRoot(document.getElementById('root'))
    root.render(<RouterProvider router={appRouter}/>)