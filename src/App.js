import React from 'react';
import TopBar from './components/topBar'
import './App.css';
import Footer from "./components/footer/footer";
import SearchForm from "./components/searchForm"
import Recipe from "./components/recipe";
import {BrowserRouter, Switch, Route, Link, NavLink} from "react-router-dom";
import {connect, Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from "./reducers/root";
import TitlePage from "./components/titlePage";


const store = createStore(rootReducer);

function App() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <TopBar/>
                    <Switch>
                        <Route path="/search" component={SearchForm}/>
                        <Route path="/recipe/:id" render={(props) => {
                            return (<Recipe id={props.match.params.id}/>)
                        }}/>
                        <Route path="/" component={TitlePage}/>
                    </Switch>
                    <Footer/>
                </BrowserRouter>
            </Provider>
        )
}

export default App;