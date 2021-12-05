import styles from "./Sidebar.module.css"
import Search from "../Search/Search"
import { useContext, useEffect } from "react"
import cx from "classnames"
import SearchButton from "../SearchButton/SearchButton"
import { Link } from "react-router-dom"
import { Context } from "../../Context"
import useScrollEffect from "../../hooks/useScrollEffect"

export default function SideBar({ expandedHome }) {
    const { favArr, setFavArr } = useContext(Context)
    const [top] = useScrollEffect()
    function handleRemove() {
        localStorage.clear()
        setFavArr([])
    }

    // useEffect(() => {
    //     let itemId = favArr.map((item) => item.uri)
    //     itemId.includes(data.uri) && setIsFav(true)
    // }, [favArr])

    return (
        <div
            className={cx({
                [styles.container]: true,
                [styles.expanded]: !top,
                [styles.expandedHome]: expandedHome && !top,
            })}>
            {!top && (
                <Search sidebarSearch>
                    <SearchButton sidebarBtn></SearchButton>
                </Search>
            )}
            <div className={styles.titleContainer}>
                <Link to="/favorites">
                    <h2 className={styles.title} title="Favorites">
                        Favorites
                    </h2>
                </Link>
                <span
                    className={styles.removeBtn}
                    title="Clear All"
                    onClick={handleRemove}>
                    x
                </span>
            </div>

            {favArr.map((fav) => {
                return (
                    <p key={fav.url} className={styles.flexContainer}>
                        <a href={fav.url} className={styles.favLink}>
                            {fav.title}
                        </a>
                        {/* <span
                            className={styles.removeBtn}
                            onClick={handleRemove}>
                            X
                        </span> */}
                    </p>
                )
            })}
        </div>
    )
}
