import React, { useState, useEffect } from "react"

const Context = React.createContext()

function ContextProvider({ children }) {
    // const [darkMode, setDarkMode] = useState(false)
    const [articles, setArticles] = useState([])
    const [favArr, setFavArr] = useState([])
    const [searchResults, setSearchResults] = useState([])
    const [topStorySubject, setTopStorySubject] = useState({
        filterTerm: "home",
        displayTerm: "Home",
    })
    const [pageNumber, setPageNumber] = useState(0)
    const [query, setQuery] = useState("")
    const [isSearchLoading, setIsSearchLoading] = useState(false)

    const TOP_STORIES_URL = `https://api.nytimes.com/svc/topstories/v2/${topStorySubject.filterTerm}.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`

    // function toggleDarkMode() {
    //     setDarkMode((prev) => !prev)
    // }

    useEffect(() => {
        const localStorageData = localStorage.getItem("favArr")
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
            .then((dataResults) => {
                const data = dataResults.results.filter(
                    (item) => item.section !== "admin"
                )
                setArticles(data)
            })
            .catch((err) => {
                console.log(err)
                if (err === 429) {
                    console.log("Too many requests")
                }
                // Place default error page here - make component
            })
    }, [TOP_STORIES_URL])

    return (
        <Context.Provider
            value={{
                articles,
                setArticles,
                favArr,
                setFavArr,
                searchResults,
                setSearchResults,
                topStorySubject,
                setTopStorySubject,
                pageNumber,
                setPageNumber,
                query,
                setQuery,
                isSearchLoading,
                setIsSearchLoading,
            }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }
