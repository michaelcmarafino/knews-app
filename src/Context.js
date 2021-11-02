import React, { useState, useEffect } from "react"

const Context = React.createContext()

function ContextProvider({ children }) {
    // const [darkMode, setDarkMode] = useState(false)
    const [articles, setArticles] = useState([])
    const [trendingArticles, setTrendingArticles] = useState([])
    const [favArr, setFavArr] = useState([])
    const [searchResults, setSearchResults] = useState([])
    // const [favArr, setFavArr] = useState(() => {
    //     const saved = localStorage.getItem("favArr")
    //     const initialValue = JSON.parse(saved)
    //     return initialValue || []
    // })

    const TOP_STORIES_URL = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`

    const TRENDING_URL = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`

    // function toggleDarkMode() {
    //     setDarkMode((prev) => !prev)
    // }

    // function handleFavClick(id) {
    //     // let newItem = articles.filter((article) => article.uri === id)
    //     // return setFav((prev) => [...prev, newItem])
    //     setIsFav(!isFav)
    // }

    useEffect(() => {
        const localStorageData = localStorage.getItem("favArr")
        // let localStorageArr = JSON.parse(localStorageData)
        // if (localStorageArr.filter((item) => item.indexOf !== -1)) {
        //     return setFavArr(localStorageArr)
        // } else {
        //     return setFavArr((prev) => prev)
        // }
        localStorageData
            ? setFavArr(JSON.parse(localStorageData))
            : setFavArr([])
    }, [])

    useEffect(() => {
        localStorage.setItem("favArr", JSON.stringify(favArr))
    }, [favArr])

    useEffect(() => {
        fetch(TOP_STORIES_URL)
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
        fetch(TRENDING_URL)
            .then((res) => {
                if (!res.ok) {
                    throw Error(
                        "Couldn't get your trending articles. Please try again"
                    )
                }
                return res.json()
            })
            .then((data) => {
                setTrendingArticles(data.results)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <Context.Provider
            value={{
                articles,
                setFavArr,
                favArr,
                trendingArticles,
                searchResults,
                setSearchResults,
            }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }
