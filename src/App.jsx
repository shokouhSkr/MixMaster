import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About, Error, HomeLayout, Newsletters, Landing, Cocktail } from "./pages";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />, // shared layout (we must add Outlet to it)
      children: [
        { index: true, element: <Landing /> }, // path: '/'
        { path: "cocktail", element: <Cocktail /> },
        { path: "newsletters", element: <Newsletters /> },
        { path: "/about", element: <About /> },
        { path: "/*", element: <Error /> },

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
