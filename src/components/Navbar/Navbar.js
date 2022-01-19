import styles from "./Navbar.module.css"
import { useState } from "react"
import { Link } from "react-router-dom"
import Search from "../Search/Search"
import { ReactComponent as HomeIcon } from "../../images/knews.svg"
import { ReactComponent as MobileNav } from "../../images/mobile-nav.svg"
import MobileMenu from "../MobileMenu/MobileMenu"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function toggleMenu() {
        console.log("hi")
        setIsMenuOpen((prev) => !prev)
    }

    return (
        <nav className={styles.container}>
            <ul className={`${styles.desktopNav} app-container`}>
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
            </ul>
            <ul className={`${styles.mobileNav} app-container`}>
                <Link className={styles.link} to="/">
                    <li className={styles.listItem}>
                        <HomeIcon
                            className={styles.homeIcon}
                            title="Top Stories"
                        />
                    </li>
                </Link>
                <div className={styles.mobileIconContainer}>
                    {isMenuOpen ? (
                        <MobileMenu toggleMenu={toggleMenu} />
                    ) : (
                        <MobileNav
                            onClick={toggleMenu}
                            className={styles.mobileNavBtn}
                            fill="white"
                            stroke="white"
                            title="Open"
                        />
                    )}
                </div>
            </ul>
        </nav>
    )
}
