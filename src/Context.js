import React, { useState, useEffect } from "react"

const Context = React.createContext()

function ContextProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false)
    const [articles, setArticles] = useState([])
    const [favArr, setFavArr] = useState([])

    function toggleDarkMode() {
        setDarkMode((prev) => !prev)
    }

    // function handleFavClick(id) {
    //     // let newItem = articles.filter((article) => article.uri === id)
    //     // return setFav((prev) => [...prev, newItem])
    //     setIsFav(!isFav)
    // }

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

    return (
        <Context.Provider
            value={{
                darkMode,
                toggleDarkMode,
                articles,
                setFavArr,
                favArr,
            }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }
