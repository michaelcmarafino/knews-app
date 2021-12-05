import styles from "./Search.module.css"
import cx from "classnames"
import { Context } from "../../Context"
import { useContext } from "react"
import { useHistory } from "react-router"

export default function Search({ children, sidebarSearch, navSearch }) {
    const { setSearchResults, query, setQuery, setIsSearchLoading } =
        useContext(Context)

    const history = useHistory()

    const searchArticles = (e) => {
        if (!query || query.length === 0 || !query.trim()) return
        e.key === "Enter" && e.preventDefault()
        const params = new URLSearchParams()
        if (query) {
            params.append("q", query)
        } else {
            params.delete("q")
        }
        history.push({ search: params.toString() })

        setIsSearchLoading(true)
        window.scrollTo(0, 0)
        fetch(
            `https://api.nytimes.com/svc/search/v2/articlesearch.json?q="${query}"&newest&&api-key=${process.env.REACT_APP_NYT_API_KEY}`
        )
            .then((res) => {
                if (!res.ok) {
                    throw Error("Couldn't complete your search. Try again.")
                }
                return res.json()
            })
            .then((data) => {
                setSearchResults(data.response.docs)
                setIsSearchLoading(false)
                console.log("Got data for Search bar")
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
                onChange={(e) => setQuery(e.target.value)}
            />
            {children}
        </form>
    )
}
