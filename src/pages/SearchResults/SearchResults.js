import styles from "./SearchResults.module.css"
import Sidebar from "../../components/Sidebar/Sidebar"
import ResultList from "../../components/ResultList/ResultList"
import Loading from "../../components/Loading/Loading"
import { Context } from "../../Context"
import { useContext } from "react"

export default function SearchResults() {
    const { searchResults, isSearchLoading } = useContext(Context)
    return (
        <div className={styles.container}>
            <h2>Showing Results For:</h2>
            <div className={styles.flexContainer}>
                <Sidebar />
                {isSearchLoading ? (
                    <Loading />
                ) : (
                    <ResultList data={searchResults} />
                )}
            </div>
        </div>
    )
}
