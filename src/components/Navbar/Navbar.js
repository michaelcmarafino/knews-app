import { useContext } from "react"
import styles from "./Navbar.module.css"
import { Link } from "react-router-dom"
import { Context } from "../../Context"
import Search from "../Search/Search"
import Button from "../Button/Button"

function Navbar() {
    const { darkMode, articles } = useContext(Context)
    console.log(articles)

    return (
        <nav className={darkMode ? styles.darkTheme : styles.lightTheme}>
            <ul className={styles.list}>
                <Link className={styles.link} to="/">
                    <li className={styles.listItem}>Knews</li>
                </Link>
                <Link className={styles.link} to="/trending">
                    <li className={styles.listItem}>Trending</li>
                </Link>

                <Search>
                    <Link to="/results">
                        <Button navBtn />
                    </Link>
                </Search>

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
