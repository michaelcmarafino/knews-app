import { useContext } from "react"
import styles from "./Navbar.module.css"
import { Link } from "react-router-dom"
import { Context } from "../../Context"
import Search from "../Search/Search"

function Navbar() {
    const { darkMode, toggleDarkMode, articles } = useContext(Context)
    console.log(articles)

    return (
        <nav className={darkMode ? styles.darkTheme : styles.lightTheme}>
            <ul className={styles.list}>
                <Link className={styles.link} to="/">
                    <li className={styles.listItem}>NuesDay</li>
                </Link>
                <Link className={styles.link} to="/trending">
                    <li className={styles.listItem}>Favorites</li>
                </Link>
                <Search />
                {/* <div onClick={toggleDarkMode}>
                    {darkMode ? (
                        <i className="ri-moon-fill" />
                    ) : (
                        <i className="ri-moon-line" />
                    )}
                </div> */}
            </ul>
        </nav>
    )
}

export default Navbar
