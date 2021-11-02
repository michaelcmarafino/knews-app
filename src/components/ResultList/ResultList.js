import styles from "./ResultList.module.css"
import { Context } from "../../Context"
import { useContext } from "react"
import Result from "../../components/Result/Result"

export default function ResultList() {
    const { searchResults } = useContext(Context)

    const resultListItems = searchResults.map((result) => (
        <li>
            <Result />
        </li>
    ))
    return (
        <div className={styles.container}>
            <ul>{resultListItems}</ul>
        </div>
    )
}
