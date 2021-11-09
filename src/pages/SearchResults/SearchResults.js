import styles from "./SearchResults.module.css"
import Sidebar from "../../components/Sidebar/Sidebar"
import ResultList from "../../components/ResultList/ResultList"
import { Context } from "../../Context"
import { useContext } from "react"

export default function SearchResults() {
    const { searchResults } = useContext(Context)
    return (
        <div className={styles.container}>
            <h2>showing results:</h2>
            <Sidebar />
            <ResultList data={searchResults} />
        </div>
    )
}
