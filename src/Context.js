import React, { useState, useEffect } from "react"

const Context = React.createContext()

function ContextProvider({ children }) {
    const [articles, setArticles] = useState([])
    const [favArr, setFavArr] = useState([])
    const [searchResults, setSearchResults] = useState([])
    const [topStorySubject, setTopStorySubject] = useState({
        filterTerm: "home",
        displayTerm: "Home",
    })
    const [isSearchLoading, setIsSearchLoading] = useState(false)

    useEffect(() => {
        const localStorageData = localStorage.getItem("favArr")
        if (localStorageData) {
            setFavArr(JSON.parse(localStorageData))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("favArr", JSON.stringify(favArr))
    }, [favArr])

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
                isSearchLoading,
                setIsSearchLoading,
            }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }
