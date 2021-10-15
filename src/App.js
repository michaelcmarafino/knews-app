import React from "react"
import Navbar from "./components/Navbar/Navbar"
import { Switch, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import SearchResults from "./pages/SearchResults/SearchResults"
// import Favorites from "./pages/Favorites/Favorites"

function App() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/trending">{/* <Favorites /> */}</Route>
                <Route path="/results">
                    <SearchResults />
                </Route>
            </Switch>
        </div>
    )
}

export default App
