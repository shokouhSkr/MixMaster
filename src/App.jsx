import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About, Error, HomeLayout, Newsletters, Landing, Cocktail, SinglePageError } from "./pages";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { loader as landingLoader } from "./pages/Landing";
import { loader as singleCocktailLoader } from "./pages/Cocktail";

import { action as newsletterAction } from "./pages/Newsletters";
///////////////////////////////////////////////////////////////////

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // lets you specify how long your data should remain fresh after a successful fetch. If your data is fresh, React Query will use the cached data and not make any network requests. If your data is stale, React Query will try to fetch fresh data from the server under certain conditions, such as when the window refocuses, the component re-mounts, or the network reconnects.
      staleTime: 1000 * 60 * 5, // every 5 min
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />, // shared layout for children (we must add Outlet to it)
    errorElement: <Error />, // global error (doesn't include shared layout)
    children: [
      {
        index: true, // path: '/'
        loader: landingLoader(queryClient), // for fetching data
        errorElement: <SinglePageError />, // include shared layout
        element: <Landing />,
      },
      {
        path: "cocktail/:id", // dynamic pages
        loader: singleCocktailLoader(queryClient),
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

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
    </QueryClientProvider>
  );
};
export default App;
