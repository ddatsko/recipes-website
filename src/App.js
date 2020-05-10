import React from 'react';
import Header from './components/header'
import TopBar from './components/topBar'
import './App.css';
import RecipesList from "./components/recipesList/recipesList";
import Footer from "./components/footer/footer";
import SearchForm from "./components/searchForm"
import Varenyky from './img/varenyky.jpg';
import Recipe from "./components/recipe";
import {BrowserRouter, Switch, Route, Link, NavLink} from "react-router-dom";


function App() {

    // Just didnt know, where to store data about recipes, so decided to leave it here
    const recipes = Array.from({length: 20}, (e, i) => ({
        description: 'Varenyky!!! One of the best dishes, created by people',
        photoSource: Varenyky,
        title: 'Varenyky',
        likes: i * 5794 % 157,
        id: i
    }));


    return (
        <BrowserRouter>
            <TopBar/>
            <Switch>
                <Route path="/search" component={SearchForm}/>
                <Route path="/recipe/:id" component={Recipe}/>
                <Route path="/" render={(props) =>
                    <React.Fragment>
                        <Header/>
                        <RecipesList title="Top recipes today" recipes={recipes}/>
                    </React.Fragment>}/>
            </Switch>
            <Footer/>
        </BrowserRouter>
    )
}

export default App;
