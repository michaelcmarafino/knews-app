import styles from "./Sidebar.module.css"
import Search from "../Search/Search"
import { useState, useLayoutEffect, useContext } from "react"
import cx from "classnames"
import SearchButton from "../SearchButton/SearchButton"
import { Link } from "react-router-dom"
import { Context } from "../../Context"

export default function SideBar() {
    const [top, setTop] = useState(true)
    const { favArr, setFavArr } = useContext(Context)

    function handleRemove() {
        // setFavArr((prevArr) => prevArr.filter((arrItem) => arrItem !== favArr))
        console.log("handle remove")

        localStorage.clear()
        setFavArr([])

        // const localStorageData = localStorage.getItem("favArr")
        // if (localStorageData) {
        //     const localStorageArr = JSON.parse(localStorageData)
        //     const index = localStorageArr.findIndex((item) => item === favArr)

        //     setFavArr(localStorageArr.splice(index, 1))

        // setFavArr(JSON.parse(localStorageData))
        // }
    }

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
            <div className={styles.titleContainer}>
                <Link to="/favorites">
                    <h2 className={styles.title}>Favorites</h2>
                </Link>
                <span className={styles.removeBtn} onClick={handleRemove}>
                    X
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
