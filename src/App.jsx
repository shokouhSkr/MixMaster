import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About, Error, HomeLayout, Newsletters, Landing, Cocktail, SinglePageError } from "./pages";

import { loader as landingLoader } from "./pages/Landing";
import { loader as singleCocktailLoader } from "./pages/Cocktail";

import { action as newsletterAction } from "./pages/Newsletters";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />, // shared layout for children (we must add Outlet to it)
      errorElement: <Error />, // global error (doesn't include shared layout)
      children: [
        {
          index: true, // path: '/'
          loader: landingLoader, // for fetching data
          errorElement: <SinglePageError />, // include shared layout
          element: <Landing />,
        },
        {
          path: "cocktail/:id", // dynamic pages
          loader: singleCocktailLoader,
          errorElement: <SinglePageError />,
          element: <Cocktail />,
        },
        {
          path: "newsletters",
          element: <Newsletters />,
          action: newsletterAction, // submit form
        },
        {
          path: "/about",
          element: <About />,
        },

        // you can have as many nested pages as you want:
        // {
        //   path: "/about",
        //   element: <About />,
        //   children: [
        //     { index: true, element: <h3>company</h3> },
        //     { path: "person", element: <h3>person</h3> },
        //   ],
        // },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
export default App;
