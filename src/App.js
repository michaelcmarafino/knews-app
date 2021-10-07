import React from "react"
import Navbar from "./components/Navbar/Navbar"
import { Switch, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
// import Favorites from "./pages/Favorites/Favorites"

function App() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/favorites">{/* <Favorites /> */}</Route>
            </Switch>
        </div>
    )
}

export default App
