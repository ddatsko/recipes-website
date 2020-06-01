import React from 'react';
import queryString from 'query-string';
import './searchForm.css'
import RecipesList from "../recipesList";
import {storeRecipes, storeSearchResults} from "../../actions/creators";
import {connect} from "react-redux";


class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.buttonClicked = true;
        this.updateCounter = 0; // Shit, but easy
        this.state = {
            ...{
                searchResults: [],
                sortBy: "name",
                maxTime: Infinity,
                query: ''
            },
            ...queryString.parse(props.location.search)
        };
    }

    handleFormSubmit(ev) {
        ev.preventDefault();
        this.buttonClicked = true;
        this.forceUpdate();
    }

    handleQuery(ev) {
        this.setState({"query": ev.target.value});
    }

    handleOrder(ev) {
        this.setState({"sortBy": ev.target.value});
    }

    handleCookingTime(ev) {
        this.setState({"maxTime": ev.target.value});
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.buttonClicked && this.updateCounter <= 2
    }

    getRecipes() {
        // Here it would be better to do this on API side rather than fetching everything and filtering.
        // But let it be like this for now

        fetch(process.env.REACT_APP_DB_SERVER + "/recipes").then(response => response.json()).then(data => {
            let filtered = data.filter(recipe =>
                (recipe.title.toLowerCase().includes(this.state.query.toLowerCase()) ||
                    recipe.ingredients.some(ing => ing.toLowerCase().includes(this.state.query.toLowerCase()))) &&
                recipe.time <= this.state.maxTime
            );
            this.props.storeSearchResults(filtered);
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.updateCounter++;
        if (this.updateCounter <= 2) {
            this.getRecipes();
        } else {
            this.updateCounter = 0;
            this.buttonClicked = false;
        }
    }

    componentDidMount() {
        this.buttonClicked = true;
        this.getRecipes();
    }


    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <form className="search-form" onSubmit={e => this.handleFormSubmit(e)}>
                        <h2 className="form-query">Search query: <span
                            className="query-name">{this.state.query || ''}</span></h2>
                        <label className="main-input">Dish or ingredient<br/><input type="text"
                                                                                    name="query"
                                                                                    onChange={e => this.handleQuery(e)}
                        /></label><br/>
                        <label>Sort by <br/><select name="sortBy" className='drop-down'
                                                    onChange={e => this.handleOrder(e)}>
                            <option value="name">Dish name</option>
                            <option value="likes">Number of likes</option>
                            <option value="date">Date posted</option>
                        </select></label><br/>
                        <label>Max cooking time (in minutes)<br/><input name="max-time" type="number"
                                                                        className="number-input"
                                                                        onChange={e => this.handleCookingTime(e)}/></label>
                        <br/>
                        <button type="submit">Apply</button>
                    </form>

                </div>
                {/*Maybe, this should not be a part of this component*/}
                <RecipesList title="Your search results" recipes={this.props.searchResults}/>
            </React.Fragment>


        )
    }
}

const mapStateToProps = (state) => ({searchResults: state.searchResults});

const mapDispatchToProps = (dispatch) => ({
    storeSearchResults: (recipes) => dispatch(storeSearchResults(recipes))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);