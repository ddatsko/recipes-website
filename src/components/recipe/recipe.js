import React from "react";
import './recipe.css'

export default class Recipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title:  "",
            description: "",
            likes: 0,
            time: 0,
            photoSource: "",
            id: props.id,
            ingredients: [],
            steps: []
        }
    }

    render() {
        return (
            <div className="container recipe-view">
                <h1>{this.state.title}</h1>
                <img className="title-photo"  alt="dish Photo" src={process.env.REACT_APP_DB_SERVER + "/" + this.state.photoSource}/>
                <span className={"cooking-time"}>Cooking time: {this.state.time}</span>
                <span className={"likes"}>Likes: {this.state.likes}</span>
                <p className="dish-description">{this.state.description}</p>
                <h2>Ingredients</h2>
                <ul className="ingredients">
                    {this.state.ingredients.map(ing => (<li key={ing}>{ing}</li>))}
                </ul>
                <ol className="steps">
                    {this.state.steps.map(step => (<li key={step}>{step}</li>))}
                </ol>

            </div>
        )
    }

    componentDidMount() {
        fetch(process.env.REACT_APP_DB_SERVER + "/recipes/" + this.props.id).then(response => response.json()).then(data => this.setState(data))
    }

}