import React from 'react';
import {
  createBrowserRouter,
} from 'react-router';

import Root from '../pages/Root';
import Home from '../Component/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
 import Allrecipe from '../pages/Allrecipe';
import AddMyrecipe from '../pages/AddMyrecipe';
import CardDetails from '../pages/CardDetails';
import MyRecipe from '../pages/MyRecipe';
import Notfound from '../pages/Notfound';
import Contact from '../Component/contact/Contact';
import AboutUs from '../Component/aboutUs/AboutUs';
import Support from '../Component/contact/support/Support';

import PrivateRoute from '../AuthProvider/PrivateRoute';
import DashboardLayout from '../pages/DashboardLayout/DashboardLayout';
import Overview from '../Component/overview/Overview';
import AllItemsTable from '../pages/AllItemsTable';
import MyRecipesTable from '../pages/MyRecipesTable';


// 🧩 Dashboard pages


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      {
        path: "/addmyrecipe",
        element: <PrivateRoute><AddMyrecipe /></PrivateRoute>
      },
      {
        path: "/allrecipe",
        loader: async () => {
          return fetch("https://recipebook-clientside.vercel.app/addrecipes")
            .then(res => res.json());
        },
        element: <Allrecipe />
      },
      {
        path: "/recipedetails/:id",
        element: <PrivateRoute><CardDetails /></PrivateRoute>
      },
      {
        path: "/myrecipe",
        element: <PrivateRoute><MyRecipe /></PrivateRoute>
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/about",
        element: <AboutUs />
      },
      {
        path: "/support",
        element: <Support />
      },
    ]
  },

  // ✅ Dashboard Routes (PRIVATE)
  {
    path: "/dashboard",
    element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    children: [
      { index: true, element: <Overview /> },
      { path: "overview", element: <Overview /> },
       { path: "allrecipe", element: <AllItemsTable></AllItemsTable>,
          loader: async () => {
    const res = await fetch("https://recipebook-clientside.vercel.app/addrecipes");
    return res.json();
  },
        },
      { path: "additem", element: <AddMyrecipe /> },
      { path: "myitems", element: <MyRecipesTable></MyRecipesTable> },
    ]
  },

  // 404
  {
    path: "/*",
    element: <Notfound />
  }
]);
