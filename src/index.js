import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Product from './pages/product'
import Home from './pages/home'
import Contact from './pages/contact'
import About from './pages/about'
import ProductDetails from './components/ProductDetails';
import Products from './components/products'





import {

  createBrowserRouter,
  Router,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/",
    element: <Home/>,
  },
 
  {
    path: "contact",
    element: <Contact/>,
  },
  {
    path: "about",
    element: <About/>,
  },
  {
    path: "product",
    element: <Product/>,
  },
  {
    path: "ProductDetails",
    element: <ProductDetails/>,
  },
  {
    path: '/',
    element: <Products />,
  },
  {
    path: '/product/:id',
    element: <ProductDetails />,
  },

  
 
 
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
