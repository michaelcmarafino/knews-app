import React from "react"
import Navbar from "./components/Navbar/Navbar"
import { Switch, Route } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import SearchResultsPage from "./pages/SearchResultsPage/SearchResultsPage"
import TrendingPage from "./pages/TrendingPage/TrendingPage"
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage"
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
                        <HomePage />
                    </Route>
                    <Route path="/trending">
                        <TrendingPage />
                    </Route>
                    <Route path="/results">
                        <SearchResultsPage />
                    </Route>
                    <Route path="/favorites">
                        <FavoritesPage />
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
