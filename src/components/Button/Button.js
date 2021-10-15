import styles from "./Button.module.css"
import { ReactComponent as SearchIcon } from "../../images/search.svg"
import cx from "classnames"

export default function Button({ navBtn, sidebarBtn }) {
    return (
        <button
            className={cx({
                [styles.navBtn]: navBtn,
                [styles.sidebarBtn]: sidebarBtn,
            })}>
            <SearchIcon />
        </button>
    )
}
