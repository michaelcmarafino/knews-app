import styles from "./SearchButton.module.css"
import { ReactComponent as SearchIcon } from "../../images/search.svg"
import cx from "classnames"
import { Link } from "react-router-dom"
import { Context } from "../../Context"
import { useContext } from "react"

export default function Button({ navBtn, sidebarBtn }) {
    const { query } = useContext(Context)
    return (
        <Link to="/results" className={query ? null : styles.disabled}>
            <button
                type="submit"
                className={cx({
                    [styles.navBtn]: navBtn,
                    [styles.sidebarBtn]: sidebarBtn,
                })}>
                <SearchIcon title="Search Articles" />
            </button>
        </Link>
    )
}
