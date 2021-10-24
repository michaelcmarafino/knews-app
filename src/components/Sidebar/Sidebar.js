import styles from "./Sidebar.module.css"
import Search from "../Search/Search"
import { useState, useLayoutEffect } from "react"
import cx from "classnames"
import SearchButton from "../SearchButton/SearchButton"
import { Link } from "react-router-dom"

export default function SideBar({ favArr }) {
    const [top, setTop] = useState(true)

    useLayoutEffect(() => {
        const handleScroll = (e) => {
            let scrolled = document.scrollingElement.scrollTop
            if (scrolled >= 100) {
                setTop(false)
            } else {
                setTop(true)
            }
        }
        document.addEventListener("scroll", handleScroll)
        return () => {
            document.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <div
            className={cx({
                [styles.container]: true,
                [styles.expanded]: !top,
            })}>
            {!top && (
                <Search sidebarSearch>
                    <SearchButton sidebarBtn></SearchButton>
                </Search>
            )}
            <Link to="/favorites">
                <h2 className={styles.title}>Favorites</h2>
            </Link>
            {favArr.map((fav) => {
                return (
                    <p key={fav.url} className={styles.flexContainer}>
                        <a href={fav.url} className={styles.favLink}>
                            {fav.title}
                        </a>
                    </p>
                )
            })}
        </div>
    )
}
