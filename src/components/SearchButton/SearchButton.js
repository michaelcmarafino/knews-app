import styles from "./SearchButton.module.css"
import { ReactComponent as SearchIcon } from "../../images/search.svg"
import cx from "classnames"
import { Link, useLocation } from "react-router-dom"
import { Context } from "../../Context"
import { useContext } from "react"

export default function Button({ navBtn, sidebarBtn }) {
    const { query } = useContext(Context)
    const location = useLocation()

    return (
        <Link
            to={!query || !query.trim() ? location.pathname : "/results"}
            className={query ? null : styles.disabled}>
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
