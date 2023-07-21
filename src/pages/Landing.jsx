import React from "react";
import axios from "axios";
import SearchForm from "../components/SearchForm";
import { useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import CocktailList from "../components/CocktailList";

const cocktailSearchUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const searchCocktailQuery = (searchTerm) => {
  return {
    queryKey: ["search", searchTerm || "all"],
    queryFn: async () => {
      const res = await axios.get(`${cocktailSearchUrl}${searchTerm}`);

      return res.data.drinks;
    },
  };
};

// for loading data (instead of using useState and useEffect)
export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get("search") || "";

    // this line checks if we have data from before and if we have, use it and if not, fetch it:
    await queryClient.ensureQueryData(searchCocktailQuery(searchTerm));

    // we use react-query instead of this simple fetching:
    // const res = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
    // return { drinks: res.data.drinks, searchTerm };

    return { searchTerm };
  };

const Landing = () => {
  const { searchTerm } = useLoaderData();
  const { data: drinks } = useQuery(searchCocktailQuery(searchTerm));

  // there wont be any loading because we fetch data before loading the page:
  // if (isLoading) return <h1>Loading...</h1>

  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  );
};

export default Landing;
