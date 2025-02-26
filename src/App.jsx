import React, { lazy , Suspense, useState } from "react"
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
import useContent from "./components/hooks/useContent"
import Login from "./components/Login"
const Contact = lazy(()=>import('./components/Contact'))
const About = lazy(()=>import('./components/About'))
    const Page = () =>{
        const [user,setUser] = useState({
            user:{
                name:"Hemanth",
                email:"hemanthc438@gmail.com"
            }
        })
        return (
        <div className="bg-neutral-100">
            <useContent.Provider value={{user:user,setUser:setUser}}>
                <Header/>
                <Outlet/>
                <Footer/>
            </useContent.Provider>
        </div>
    )
}
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
            },{
                path:'/login',
                element:<Login/>
            }]
        }
    ]);
    const root = ReactDOM.createRoot(document.getElementById('root'))
    root.render(<RouterProvider router={appRouter}/>)