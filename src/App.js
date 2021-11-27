import React from "react"
import Navbar from "./components/Navbar/Navbar"
import { Switch, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import SearchResults from "./pages/SearchResults/SearchResults"
import Trending from "./pages/Trending/Trending"
import Favorites from "./pages/Favorites/Favorites"
import TopPageButton from "./components/TopPageButton/TopPageButton"
import Footer from "./components/Footer/Footer"
import Page404 from "./pages/Page404/Page404"

function App() {
    return (
        <div>
            <Navbar />
            <div className="app-container">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/trending">
                        <Trending />
                    </Route>
                    <Route path="/results">
                        <SearchResults />
                    </Route>
                    <Route path="/favorites">
                        <Favorites />
                    </Route>
                    <Route>
                        <Page404 />
                    </Route>
                </Switch>
                <TopPageButton />
            </div>
            <Footer />
        </div>
    )
}

export default App
