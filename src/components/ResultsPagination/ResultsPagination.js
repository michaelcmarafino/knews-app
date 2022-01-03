import styles from "./ResultsPagination.module.css"
import { Context } from "../../Context"
import { useContext } from "react"

export default function ResultsPagination() {
    const {
        searchResults,
        setSearchResults,
        searchTerm,
        searchPageNumber,
        setSearchPageNumber,
    } = useContext(Context)

    function fetchMoreResults() {
        fetch(
            `https://api.nytimes.com/svc/search/v2/articlesearch.json?page=${searchPageNumber}&sort=newest&api-key=${process.env.REACT_APP_NYT_API_KEY}&q="${searchTerm}"`
        )
            .then((res) => {
                if (!res.ok) {
                    throw Error("Couldn't complete your search. Try again.")
                }
                return res.json()
            })
            .then((data) => {
                setSearchResults((prev) => [...prev, ...data.response.docs])
                setSearchPageNumber((searchPageNumber) => searchPageNumber + 1)
                console.log("Got More Results for Search bar")
                console.log(searchTerm)
                console.log(searchResults)
            })
            .catch((err) => {
                console.log(err)
                // Place default error page here - make component
            })
    }

    return (
        <button onClick={fetchMoreResults} className={styles.container}>
            More Results
        </button>
    )
}
