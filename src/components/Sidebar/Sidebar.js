import styles from "./Sidebar.module.css"
import Search from "../Search/Search"
import { useContext, useState } from "react"
import { Context } from "../../Context"
import cx from "classnames"
import { Link } from "react-router-dom"
import useScrollEffect from "../../hooks/useScrollEffect"
import SidebarBtn from "../SidebarBtn/SidebarBtn"
import { scrollToTop } from "../../helpers/helpers"

export default function SideBar({ expandedHome }) {
    const { favArr, setFavArr } = useContext(Context)

    const [top] = useScrollEffect()
    function handleRemove(e) {
        let element = e.target.parentNode.parentNode.parentNode.id
        let newFavArr = favArr.filter((item) => item.uri !== element)
        setFavArr(newFavArr)
    }

    return (
        <div
            className={cx({
                [styles.container]: true,
                [styles.expanded]: !top,
                [styles.expandedHome]: expandedHome && !top,
            })}>
            {!top && <Search sidebarSearch sidebarBtn />}
            <Link
                onClick={scrollToTop}
                className={styles.linkDiv}
                to="/favorites">
                <h2 className={styles.title} title="Favorites">
                    Favorites
                </h2>
                {favArr.length ? (
                    <span className={styles.totalFavs}>({favArr.length})</span>
                ) : null}
            </Link>

            {favArr.length === 0 ? (
                <p>Squeeze a heart to add a favorite here...</p>
            ) : (
                favArr.map((fav) => {
                    return (
                        <SidebarBtn
                            key={fav.title}
                            fav={fav}
                            handleRemove={handleRemove}
                        />
                    )
                })
            )}
        </div>
    )
}
