import React from 'react'
import './recipePreview.css'
import {Link} from 'react-router-dom'

const RecipePreview = ({title, description, likes, photoSource, id}) => {
    return (
        <li className="recipe-preview">
            <Link to={'/recipe/' + id}>
                <img className="recipe-img" alt="recipe" src={photoSource}/>
                <h2 className="recipe-title">{title}</h2>
                <p className="recipe-short-desc">{description}</p>
                <p className="recipe-desc-footer">Likes: {likes}</p>
            </Link>
        </li>
    )
};

export default RecipePreview;