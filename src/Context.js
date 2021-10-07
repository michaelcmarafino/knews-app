import React, { useState, useEffect } from "react"

const Context = React.createContext()

function ContextProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false)
    const [articles, setArticles] = useState([])
    const [favorites, setFavorites] = useState([])
    const [query, setQuery] = useState("")

    function toggleDarkMode() {
        setDarkMode((prev) => !prev)
    }

    function handleChange(e) {
        setQuery(e.target.value)
    }

    const url = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`

    useEffect(() => {
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw Error("Couldn't get your articles")
                }
                return res.json()
            })
            .then((data) => {
                setArticles(data.results)
            })
            .catch((err) => {
                console.log(err)
                // Place default error page here - make component
            })
    }, [])

    useEffect(() => {
        fetch(
            `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${process.env.REACT_APP_NYT_API_KEY}`
        )
            .then((res) => {
                if (!res.ok) {
                    throw Error("Couldn't complete your search. Try again.")
                }
                return res.json()
            })
            .then((data) => {
                console.log(data)
            })
    }, [query])

    return (
        <Context.Provider
            value={{
                darkMode,
                toggleDarkMode,
                articles,
                favorites,
                setFavorites,
                query,
                handleChange,
            }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }
