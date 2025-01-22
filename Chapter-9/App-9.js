import React, { lazy , Suspense} from "react";
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
import Shimmer from "./components/Shimmer";



// chunking
// dynamic bundling
// lazy loading
// code splitting
//on demand loading
//dynamic import

const Instamart = lazy(() => import("./components/Instamart"));

// upon on demand loading  => react will render which is not present(component) => then it will suspend loading[because code is not there]

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
            element: <Profile />,
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
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
          // <Instamart />
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
