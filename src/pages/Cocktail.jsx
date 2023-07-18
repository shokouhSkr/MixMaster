import React from "react";
import { Link, Navigate, useLoaderData, useOutletContext } from "react-router-dom";
import axios from "axios";
import Wrapper from "../assets/wrappers/CocktailPage";

const singleCocktailUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

// for loading data (instead of using useState and useEffect)
export const loader = async ({ params }) => {
  const { id } = params; // "id" because of /cocktail/:id

  const { data } = await axios.get(`${singleCocktailUrl}${id}`);
  console.log("id: ", id); // id from URL

  return { id, data };
};

const Cocktail = () => {
  // we set context on <Outlet/> in HomeLayout and get access to value here:
  // const data = useOutletContext();
  // console.log("data from useOutletContext: ", data.value);

  const { id, data } = useLoaderData();

  // if (!data) return <h2>something went wrong...</h2>;
  if (!data) return <Navigate to="/" />;

  const singleDrink = data.drinks[0];
  console.log("singleCocktail: ", singleDrink, " ,id:", id);

  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;

  const validIngredients = Object.keys(singleDrink)
    .filter((item) => item.startsWith("strIngredient") && singleDrink[item] !== null)
    .map((item) => singleDrink[item]);
  // console.log(validIngredients);

  const formattedIngredients = validIngredients.join(", ");
  console.log(formattedIngredients);

  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">
          back home
        </Link>
        <h3>{name}</h3>
      </header>

      <div className="drink">
        <img src={image} alt={name} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name: </span>
            {name}
          </p>
          <p>
            <span className="drink-data">category: </span>
            {category}
          </p>
          <p>
            <span className="drink-data">info: </span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass: </span>
            {glass}
          </p>
          <p>
            <span className="drink-data">ingredients: </span>
            {formattedIngredients}
          </p>
          <p>
            <span className="drink-data">instructions: </span>
            {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cocktail;
