import styles from "./SearchButton.module.css"
import { ReactComponent as SearchIcon } from "../../images/search.svg"
import cx from "classnames"
import { Link, useLocation } from "react-router-dom"

export default function SearchButton({ navBtn, sidebarBtn, query }) {
    // const location = useLocation()

    return (
        <Link
            // to={!query || !query.trim() ? location.pathname : "/results"}
            to={"/results"}>
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
