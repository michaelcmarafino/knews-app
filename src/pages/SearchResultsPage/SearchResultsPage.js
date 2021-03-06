import styles from "./SearchResultsPage.module.css"
import Sidebar from "../../components/Sidebar/Sidebar"
import ResultList from "../../components/ResultList/ResultList"
import Loading from "../../components/Loading/Loading"
import { Context } from "../../Context"
import { useContext, useEffect } from "react"
import { APP_TITLE } from "../../helpers/globalVariables"

export default function SearchResultsPage() {
    const { searchResults, isSearchLoading } = useContext(Context)

    //change tab title when rendering
    useEffect(() => {
        document.title = `Search - ${APP_TITLE}`
    }, [])

    return (
        <div className={styles.container}>
            <h2>
                Showing Results for "
                {window.location.href
                    .substring(window.location.href.indexOf("=") + 1)
                    .split("+")
                    .join(" ")}
                "
            </h2>
            <div className={styles.flexContainer}>
                <Sidebar />
                {isSearchLoading ? (
                    <Loading />
                ) : (
                    <div className={styles.resultsContainer}>
                        <ResultList data={searchResults} />
                    </div>
                )}
            </div>
        </div>
    )
}
