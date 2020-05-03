import React from "react";
import './recipesList.css';
import RecipePreview from "../recipePreview";

export default class RecipesList extends React.Component {
    constructor(props) {
        super(props);
        let {title, recipes} = props;
        this.state = {
            title: title || '',
            recipes: recipes || []
        }
    }

    render() {
        return (
            <div className={'recipes-list-block'}>
                <div className={'container'}>
                    <h2 className={'recipes-list-title'}>{this.state.title}</h2>
                    <ul className={'recipes-list'}>
                        {this.state.recipes.map((recipe) => (
                            <RecipePreview description={recipe.description} likes={recipe.likes}
                                           photoSource={recipe.photoSource} title={recipe.title}
                            > </RecipePreview>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }

}