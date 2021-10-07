import styles from "./Search.module.css"

import { useContext } from "react"
import { Context } from "../../Context"

export default function Search() {
    const { query, handleChange } = useContext(Context)

    return (
        <>
            <input
                className={styles.input}
                type="text"
                placeholder="Search articles..."
                value={query}
                onChange={handleChange}
            />
        </>
    )
}
