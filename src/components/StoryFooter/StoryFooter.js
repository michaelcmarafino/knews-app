import styles from "./StoryFooter.module.css"
import { useState, useEffect, useContext } from "react"
import { Context } from "../../Context"
import { ReactComponent as FavIcon } from "../../images/fav.svg"
import { ReactComponent as UnfavIcon } from "../../images/unfav.svg"
import { useLocation } from "react-router"
import Notification from "../Notification/Notification"

export default function StoryFooter({ data, bottomPos, isResult }) {
    const { setFavArr, favArr, topStorySubject } = useContext(Context)
    const [isFav, setIsFav] = useState(false)
    const [isNotificationOpen, setIsNotificationOpen] = useState(false)
    const { pathname } = useLocation()
    const pubDate = new Date(data.pub_date)

    useEffect(() => {
        if (isNotificationOpen) {
            const interval = setInterval(() => {
                console.log("remove the favorite!")
                setIsNotificationOpen(false)
            }, 2000)
            return () => clearInterval(interval)
        }
    }, [isNotificationOpen])

    const handleFav = (e) => {
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
        let todaysDate = new Date().toLocaleDateString("en-US")
        let dataWithAddedToFavsDate = {
            ...data,
            date_added_by_user: todaysDate,
            isResult: isResult,
        }
        !isFav
            ? setFavArr([...favArr, dataWithAddedToFavsDate])
            : setFavArr((prevArr) => prevArr.filter((item) => item !== data))
    }

    useEffect(() => {
        let itemId = favArr.map((item) => item.uri)
        itemId.includes(data.uri) ? setIsFav(true) : setIsFav(false)
    }, [favArr])

    return (
        <footer className={styles.footer}>
            {pathname === "/results" ? (
                <p>
                    filed to:{" "}
                    <span className={styles.section}>{data.section_name}</span>{" "}
                    on {pubDate.toLocaleDateString("en-US")}
                </p>
            ) : (
                <h2>
                    filed to:{" "}
                    <span className={styles.author}>
                        {pathname !== "/trending"
                            ? topStorySubject.displayTerm
                            : data.section}
                    </span>
                </h2>
            )}

            <div
                onClick={handleFav}
                name={pathname === "/results" ? data.web_url : data.uri}>
                {!isFav ? (
                    <UnfavIcon
                        title="Add Favorite"
                        className={styles.unfavIcon}
                        onClick={() => setIsNotificationOpen(true)}
                    />
                ) : (
                    <FavIcon
                        name={pathname === "/results" ? data.web_url : data.uri}
                        title="Remove Favorite"
                        className={styles.favIcon}
                    />
                )}
            </div>
            <Notification bottomPos={bottomPos} open={isNotificationOpen}>
                added to favorites
            </Notification>
        </footer>
    )
}
