import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Error from './components/Error';
import Shimmer from './components/Shimmer';
// import RestaurantMenu from './components/RestaurantMenu';
// import Grocery from './components/Grocery';

//Chunking
//CodeSplitting
//lazy loading
//Dynamic Bundling
// On demand loading

const Grocery = lazy(() => import("./components/Grocery")); //Lazy Loading
const RestaurantMenu = lazy(()=> import('./components/RestaurantMenu'))


const AppLayout = () => {
    return (
        <div className='App'>
        <Header />
        <Outlet />
        <Footer />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/cart",
                element: <Cart/>
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>
            }
        ],
        errorElement: <Error/>,
    },
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);


 
