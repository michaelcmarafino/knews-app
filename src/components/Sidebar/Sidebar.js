import styles from "./Sidebar.module.css"
import Search from "../Search/Search"
import { useState, useLayoutEffect } from "react"
import { Link } from "react-router-dom"
import cx from "classnames"
import Button from "../Button/Button"

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
                    <Button sidebarBtn></Button>
                </Search>
            )}
            <h2 className={styles.title}>Favorites</h2>
            {favArr.map((fav) => {
                return (
                    <h4>
                        <a href={fav.url}> {fav.title}</a>
                    </h4>
                )
            })}
        </div>
    )
}
