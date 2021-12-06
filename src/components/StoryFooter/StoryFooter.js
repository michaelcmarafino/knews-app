import styles from "./StoryFooter.module.css"
import { useState, useEffect, useContext } from "react"
import { Context } from "../../Context"
import { ReactComponent as FavIcon } from "../../images/fav.svg"
import { ReactComponent as UnfavIcon } from "../../images/unfav.svg"
import { useLocation } from "react-router"

export default function StoryFooter({ data }) {
    const { setFavArr, favArr, topStorySubject } = useContext(Context)
    const [isFav, setIsFav] = useState(false)
    const { pathname } = useLocation()
    const date = new Date(data.pub_date)

    const handleFav = (e) => {
        // console.log(
        //     "clicked and this is what I got",
        //     e.target.parentNode.getAttribute("name")
        // )
        if (isFav) {
            const localStorageData = JSON.parse(localStorage.getItem("favArr"))
            if (pathname === "/results") {
                const newLocal = localStorageData.filter(
                    (item) =>
                        item.web_url !==
                        e.target.parentNode.getAttribute("name")
                )
                setFavArr(newLocal)
            } else {
                const newLocal = localStorageData.filter(
                    (item) =>
                        item.uri !== e.target.parentNode.getAttribute("name")
                )
                setFavArr(newLocal)
            }
        }
        setIsFav((prev) => !prev)
        !isFav
            ? setFavArr([...favArr, data])
            : setFavArr((prevArr) => prevArr.filter((item) => item !== data))
    }

    useEffect(() => {
        let itemId = favArr.map((item) => item.uri)
        itemId.includes(data.uri) && setIsFav(true)
    }, [])

    //   useEffect(() => {
    //     if (pathname === "/results") {
    //         let itemId = favArr.map((item) => item.web_url)
    //         itemId.includes(data.web_url) && setIsFav(true)
    //     } else {
    //         let itemId = favArr.map((item) => item.uri)
    //         itemId.includes(data.uri) && setIsFav(true)
    //     }
    // }, [])

    return (
        <footer className={styles.footer}>
            {pathname === "/results" ? (
                <p>
                    filed to:{" "}
                    <span className={styles.section}>{data.section_name}</span>{" "}
                    on {date.toLocaleDateString("en-US")}
                </p>
            ) : (
                <h2>
                    filed to:{" "}
                    <span className={styles.author}>
                        {topStorySubject.displayTerm}
                    </span>
                </h2>
            )}

            <div
                onClick={handleFav}
                name={pathname === "/results" ? data.web_url : data.uri}>
                {!isFav ? (
                    <UnfavIcon
                        title="Add Favorite"
                        className={styles.favIcon}
                    />
                ) : (
                    <FavIcon
                        name={pathname === "/results" ? data.web_url : data.uri}
                        title="Remove Favorite"
                        className={styles.favIcon}
                    />
                )}
            </div>
        </footer>
    )
}
