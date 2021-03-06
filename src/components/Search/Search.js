import styles from "./Search.module.css"
import cx from "classnames"
import { Context } from "../../Context"
import { useContext, useRef } from "react"
import { useHistory } from "react-router"
import { ReactComponent as SearchIcon } from "../../images/search.svg"

export default function Search({
    sidebarSearch,
    navBtn,
    sidebarBtn,
    toggleMenu,
    isMobileMenuOpen,
}) {
    const {
        setSearchResults,
        setIsSearchLoading,
        setSearchTerm,
        searchPageNumber,
        setSearchPageNumber,
    } = useContext(Context)
    const query = useRef()
    const history = useHistory()

    const fetchResults = e => {
        // if (!query || query.length === 0 || !query.trim()) return
        // e.key === "Enter" &&
        e.preventDefault()
        isMobileMenuOpen && toggleMenu()
        history.push("/results")
        const params = new URLSearchParams()
        if (query.current.value.length > 1) {
            params.append("q", query.current.value)
        } else {
            params.delete("q")
        }
        history.push({ search: params.toString() })
        console.log(query.current.value)
        setIsSearchLoading(true)
        setSearchTerm(query.current.value)
        window.scrollTo(0, 0)
        // `https://api.nytimes.com/svc/search/v2/articlesearch.json?q="${query.current.value}"&newest&&api-key=${process.env.REACT_APP_NYT_API_KEY}`
        fetch(
            `https://api.nytimes.com/svc/search/v2/articlesearch.json?page=${searchPageNumber}&sort=newest&api-key=${process.env.REACT_APP_NYT_API_KEY}&q=${query.current.value}`
        )
            .then(res => {
                if (!res.ok) {
                    throw Error("Couldn't complete your search. Try again.")
                }
                return res.json()
            })
            .then(data => {
                setSearchResults(data.response.docs)
                setIsSearchLoading(false)
                console.log("Got data for Search bar")
                setSearchPageNumber(searchPageNumber => searchPageNumber + 1)
            })
            .catch(err => {
                console.log(err)
                // Place default error page here - make component
            })
        query.current.value = ""
    }

    return (
        <form onSubmit={fetchResults}>
            <input
                className={cx({
                    [styles.input]: true,
                    [styles.sidebarSearch]: sidebarSearch,
                })}
                type="search"
                placeholder="Search articles..."
                required
                ref={query}
                // value={query}
                // onChange={(e) => setQuery(e.target.value)}
            />
            {/* <Link
                // to={!query || !query.trim() ? location.pathname : "/results"}
                to={"/results"}> */}
            <button
                type="submit"
                className={cx({
                    [styles.navBtn]: navBtn,
                    [styles.sidebarBtn]: sidebarBtn,
                })}>
                <SearchIcon title="Search Articles" />
            </button>
        </form>
    )
}
