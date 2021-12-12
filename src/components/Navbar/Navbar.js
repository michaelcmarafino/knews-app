import styles from "./Navbar.module.css"
import { Link } from "react-router-dom"
import Search from "../Search/Search"
import SearchButton from "../SearchButton/SearchButton"
import { ReactComponent as HomeIcon } from "../../images/knews.svg"

export default function Navbar() {
    return (
        <nav>
            <ul className={`${styles.list} app-container`}>
                <Link className={styles.link} to="/">
                    <li className={styles.listItem}>
                        <HomeIcon
                            className={styles.homeIcon}
                            title="Top Stories"
                        />
                    </li>
                </Link>
                <Link className={styles.link} to="/trending">
                    <li className={styles.listItem} title="Trending">
                        Trending
                    </li>
                </Link>
                <Link className={styles.link} to="/favorites">
                    <li className={styles.listItem} title="Favorites">
                        Favorites
                    </li>
                </Link>

                <Search navBtn />
                {/* <SearchButton navBtn />
                </Search> */}
            </ul>
        </nav>
    )
}
