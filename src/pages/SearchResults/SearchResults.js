import styles from "./SearchResults.module.css"
import Sidebar from "../../components/Sidebar/Sidebar"
import ResultList from "../../components/ResultList/ResultList"

export default function SearchResults() {
    return (
        <div className={styles.container}>
            <h2>showing results:</h2>
            <Sidebar />
            <ResultList />
        </div>
    )
}
