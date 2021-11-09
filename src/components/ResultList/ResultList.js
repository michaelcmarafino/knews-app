import styles from "./ResultList.module.css"
import Result from "../../components/Result/Result"

export default function ResultList({ data }) {
    const resultListItems = data.map((result) => (
        <Result key={result._id} datum={result} />
    ))
    return <section className={styles.container}>{resultListItems}</section>
}
