import React from 'react';
import RecipesList from "../recipesList";
import Header from "../header";
import {connect} from "react-redux";
import {storeRecipes} from "../../actions/creators"


class TitlePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {recipes: []}
    };

    render() {
        return (
            <React.Fragment>
                <Header/>
                <RecipesList title="Top recipes today" recipes={this.props.recipes}/>
            </React.Fragment>
        )
    }

    componentDidMount() {
        fetch(process.env.REACT_APP_DB_SERVER + "/recipes").then(response => response.json()).then(data => this.props.storeRecipes(data))
    }
}

const mapStateToProps = (state) => ({recipes: state.recipes});

const mapDispatchToProps = (dispatch) => ({
    storeRecipes: (recipes) => dispatch(storeRecipes(recipes))
});

export default connect(mapStateToProps, mapDispatchToProps)(TitlePage);