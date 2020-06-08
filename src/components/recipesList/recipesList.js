import React from "react";
import './recipesList.css';
import RecipePreview from "../recipePreview";

const photoRoot = process.env.REACT_APP_DB_SERVER + "/";

const RecipesList = (props) => {
    return (
        <div className="recipes-list-block">
            <div className="container">
                <h2 className="recipes-list-title">{props.title}</h2>
                <ul className="recipes-list">
                    {props.recipes.map((recipe) => (
                        <RecipePreview description={recipe.description} likes={recipe.likes}
                                       photoSource={photoRoot + recipe.photoSource} title={recipe.title}
                                       id={recipe.id} key={recipe.id}
                        > </RecipePreview>
                    ))}
                </ul>
            </div>
        </div>
    )
};

export default RecipesList;