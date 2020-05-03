import React from 'react'
import './recipePreview.css'

const RecipePreview = ({title, description, likes, photoSource}) => {
    return (
        <li className={'recipe-preview'}>
            <img className={'recipe-img'} alt={'recipe'} src={photoSource}/>
            <h2 className={'recipe-title'}>{title}</h2>
            <p className={'recipe-short-desc'}>{description}</p>
            <p class={'recipe-desc-footer'}>Likes: {likes}</p>


        </li>
    )
};

export default RecipePreview;