import React from 'react';
import Login from './Login';
import BrowsePage from './BrowsePage';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path:'/',
            element: <Login />
        },
        {
            path:'/browse',
            element: <BrowsePage />
        }
    ])
    return ( 
        <div>
            <RouterProvider router={appRouter} />
        </div>
     );
}
 
export default Body;