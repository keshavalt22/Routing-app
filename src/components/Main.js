import {BrowserRouter, Route } from "react-router-dom";
import Articles from "./Articles";
import Home from "./Home";
import Article from "./Article";
import Books from "./Books";
import People from "./People";
import Help from './Help';

function Main(){
    return (
        <BrowserRouter>
            <Route path="/">
                <Home />
            </Route>
            <Route path="/articles">
                <Articles />
            </Route>
            <Route path="/articles/:slug">
                <Article />
            </Route>
            <Route path="/books">
                <Books />
            </Route>
            <Route path="/people">
                <People/>
            </Route>
            <Route path="/help">
                <Help/>
            </Route>
        </BrowserRouter>
    )
}

export default Main;