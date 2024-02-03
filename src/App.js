import React, { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu"
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./config/appStore";
import Cart from "./components/Cart";

// const Grocery=lazy(()=>import("./components/Grocery"));



const AppLayout=()=>{
    return (
        <Provider store={appStore}>
         <div className="app">
            <Header/>
            <Outlet/>
        </div>
        </Provider>
       
    )  
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            // {
            //     path:"/grocery",
            //     element:   <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
            // },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>
            },
            {
                path:"/cart",
                element:<Cart/>
            },
        ],
        errorElement:<Error/>
    },
    
])

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)





//Redux is not mandatory.
//Only use when the application is large
//Its a state management libarary
//Makes debugging easy
//Zustand is another state management librarary.
//Why use RTK over redux:
// 1.Configuring a  redux store was difficult 
// 2.have to add a lot of package to redux to do anything
// 3.It requires too much boiler plate code .

