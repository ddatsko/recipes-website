import React from "react";
import './recipesList.css';
import RecipePreview from "../recipePreview";

export default class RecipesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title || '',
            recipes: props.recipes || []
        }
    }

    render() {
        return (
            <div className="recipes-list-block">
                <div className="container">
                    <h2 className="recipes-list-title">{this.state.title}</h2>
                    <ul className="recipes-list">
                        {this.state.recipes.map((recipe) => (
                            <RecipePreview description={recipe.description} likes={recipe.likes}
                                           photoSource={recipe.photoSource} title={recipe.title}
                                           id={recipe.id}
                            > </RecipePreview>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }

}