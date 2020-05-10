import React from 'react';
import Header from './components/header'
import TopBar from './components/topBar'
import './App.css';
import RecipesList from "./components/recipesList/recipesList";
import Footer from "./components/footer/footer";
import Varenyky from './img/varenyky.jpg';


function App() {

    // Just didnt know, where to store data about recipes, so decided to leave it here
    const recipes = Array.from({ length: 20 }, (e, i) => ({
        description: 'Varenyky!!! One of the best dishes, created by people',
        photoSource: Varenyky,
        title: 'Varenyky',
        likes: i * 5794 % 156
    }));


    return (
        <>
            <TopBar></TopBar>
            <Header></Header>
            <RecipesList title="Top recipes today" recipes={recipes}></RecipesList>
            <Footer></Footer>
        </>
    )
        ;
}

export default App;
