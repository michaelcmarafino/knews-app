import styles from "./FilterButton.module.css"
import { useContext } from "react"
import { Context } from "../../Context"

export default function FilterButton({ text }) {
    const { setTopStorySubject } = useContext(Context)
    const handleClick = () => {
        setTopStorySubject(text)
    }

    return (
        <button className={styles.btn} onClick={handleClick} title={text}>
            {text}
        </button>
    )
}
