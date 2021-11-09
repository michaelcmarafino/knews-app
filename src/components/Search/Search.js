import styles from "./Search.module.css"
import cx from "classnames"
import { Context } from "../../Context"
import { useContext, useState } from "react"

export default function Search({ children, sidebarSearch, navSearch }) {
    const { setSearchResults } = useContext(Context)
    const [query, setQuery] = useState("")

    function handleChange(e) {
        setQuery(e.target.value)
    }

    const searchArticles = (e) => {
        if (!query) return e.preventDefault()
        e.key === "Enter" && e.preventDefault()
        fetch(
            `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&sort=newest&api-key=${process.env.REACT_APP_NYT_API_KEY}`
        )
            .then((res) => {
                if (!res.ok) {
                    throw Error("Couldn't complete your search. Try again.")
                }
                return res.json()
            })
            .then((data) => {
                setSearchResults(data.response.docs)
            })
            .catch((err) => {
                console.log(err)
                // Place default error page here - make component
            })
        setQuery("")
    }

    return (
        <form onClick={searchArticles}>
            <input
                className={cx({
                    [styles.input]: true,
                    [styles.sidebarSearch]: sidebarSearch,
                })}
                type="search"
                placeholder="Search articles..."
                value={query}
                onChange={handleChange}
            />
            {children}
        </form>
    )
}
