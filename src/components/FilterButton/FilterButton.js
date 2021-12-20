import styles from "./FilterButton.module.css"
import { useContext } from "react"
import { Context } from "../../Context"
import cx from "classnames"

export default function FilterButton({ btnInfo, setCurrentPage }) {
    const { setTopStorySubject, setArticles, topStorySubject } =
        useContext(Context)

    const handleClick = (e) => {
        setArticles([])
        setCurrentPage(0)
        setTopStorySubject({
            filterTerm: btnInfo.filterTerm,
            displayTerm: btnInfo.displayTerm,
        })
    }

    return (
        <button
            className={cx({
                [styles.btn]: true,
                [styles.selected]:
                    topStorySubject.displayTerm === btnInfo.displayTerm,
            })}
            onClick={handleClick}
            title={btnInfo.displayTerm}>
            {btnInfo.displayTerm}
        </button>
    )
}
