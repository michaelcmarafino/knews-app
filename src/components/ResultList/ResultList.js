import styles from "./ResultList.module.css"
import Result from "../../components/Result/Result"

export default function ResultList({ data }) {
    if (!data.length) return <h2>No Results, Try another search term</h2>
    const resultListItems = data.map((result) => (
        <Result key={result._id} datum={result} />
    ))
    return <section className={styles.container}>{resultListItems}</section>
}
