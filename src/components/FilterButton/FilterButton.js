import styles from "./FilterButton.module.css"
import { useContext } from "react"
import { Context } from "../../Context"

export default function FilterButton({ btnInfo }) {
    const { setTopStorySubject, setArticles } = useContext(Context)
    const handleClick = () => {
        setArticles([])
        setTopStorySubject({
            filterTerm: btnInfo.filterTerm,
            displayTerm: btnInfo.displayTerm,
        })
    }

    return (
        <button
            className={styles.btn}
            onClick={handleClick}
            title={btnInfo.displayTerm}>
            {btnInfo.displayTerm}
        </button>
    )
}
