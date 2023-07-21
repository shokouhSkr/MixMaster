import React from "react";
import axios from "axios";
import SearchForm from "../components/SearchForm";
import { useLoaderData } from "react-router-dom";
import CocktailList from "../components/CocktailList";

const cocktailSearchUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

// for loading data (instead of using useState and useEffect)
export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("search") || "";
  const res = await axios.get(`${cocktailSearchUrl}${searchTerm}`);

  return { drinks: res.data.drinks, searchTerm };
};

const Landing = () => {
  const { drinks, searchTerm } = useLoaderData();
  console.log("drinks data: ", drinks, " ,search term: ", searchTerm);

  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  );
};

export default Landing;
