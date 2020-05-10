import React from 'react';
import queryString from 'query-string';
import './searchForm.css'
import RecipesList from "../recipesList/recipesList";
import Varenyky from "../../img/varenyky.jpg";


export default class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values: queryString.parse(props.location.search)
        };
    }


    render() {
        // Just temporary filling
        const recipes = Array.from({length: 20}, (e, i) => ({
            description: 'Varenyky!!! One of the best dishes, created by people',
            photoSource: Varenyky,
            title: 'Varenyky',
            likes: i * 5794 % 157,
            id: i
        }));


        return (
            <React.Fragment>
                <div className="container">
                    <form className="search-form" method="GET" action={this.props.match.url}>
                        <h2 className="form-query">Search query: <span
                            className="query-name">{this.state.values.query || ''}</span></h2>
                        <label className="main-input">Dish or ingredient<br/><input type="text"
                                                                                    name="query"
                                                                                    onChange={(value) => value.preventDefault()}
                        /></label><br/>
                        <label>Sort by <br/><select name="sortBy" className='drop-down'>
                            <option value="name">Dish name</option>
                            <option value="likes">Number of likes</option>
                            <option value="date">Date posted</option>
                        </select></label><br/>
                        <label>Max cooking time (in minutes)<br/><input name="max-time" type="number"
                                                                        className="number-input"/></label>
                        <br/>
                        <button type="submit">Apply</button>
                    </form>

                </div>
                {/*Maybe, this should not be a part of this component*/}
                <RecipesList title="Your search results" recipes={recipes}/>
            </React.Fragment>


        )
    }

}