import styles from "./SearchButton.module.css"
import { ReactComponent as SearchIcon } from "../../images/search.svg"
import cx from "classnames"
import { Link } from "react-router-dom"

export default function Button({ navBtn, sidebarBtn }) {
    return (
        <button
            className={cx({
                [styles.navBtn]: navBtn,
                [styles.sidebarBtn]: sidebarBtn,
            })}>
            <Link to="/results">
                <SearchIcon />
            </Link>
        </button>
    )
}
