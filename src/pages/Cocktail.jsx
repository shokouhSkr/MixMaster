import React from "react";
import { useLoaderData, useOutletContext } from "react-router-dom";
import axios from "axios";
import Wrapper from "../assets/wrappers/CocktailPage";

const singleCocktailUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

// for loading data (instead of using useState and useEffect)
export const loader = async ({ params }) => {
  const { id } = params; // id because of /cocktail/:id

  const { data } = await axios.get(`${singleCocktailUrl}${id}`);
  console.log("id: ", id); // id from URL

  return { id, data };
};

const Cocktail = () => {
  // we set context on <Outlet/> in HomeLayout and get access to value here
  // const data = useOutletContext();
  // console.log("data from useOutletContext: ", data.value);

  const { id, data } = useLoaderData();
  const singleDrink = data.drinks[0];
  console.log("singleCocktail: ", singleDrink, " ,id:", id);

  return <Wrapper>de</Wrapper>;
};

export default Cocktail;
