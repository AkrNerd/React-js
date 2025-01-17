import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
        
        children: [
          {
            path: "profile", // parentpath/childpath => localhost:1234/about/profile

           //! path: "/profile", => then react thing like this  localhost:1234/profile, so dont put / in child one  /--> means root directory [still has some doubts chatgpt it ]

//* NOTE: CHILDREN ARE ALWAYS RENDER INSIDE THE OUTLET COMPONET , AND OUTLET SHOULD ALWAYS BE MADE INIDE THE PARENT COMPONENT.
            element:<Profile/>,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
