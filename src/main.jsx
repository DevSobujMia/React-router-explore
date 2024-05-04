import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Posts from './Components/Posts/Posts';
import Users from './Components/Users/Users';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,

    children: [
      {
        path: '/users',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: '/posts',
        element: <Posts></Posts>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div id='root' className='h-screen bg-gray-900 text-white'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  </React.StrictMode>
);
