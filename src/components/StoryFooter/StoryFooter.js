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
            ? setFavArr([dataWithAddedToFavsDate, ...favArr])
            : setFavArr((prevArr) => prevArr.filter((item) => item !== data))
    }

    useEffect(() => {
        let itemId = favArr.map((item) => item.uri)
        itemId.includes(data.uri) ? setIsFav(true) : setIsFav(false)
    }, [favArr])

    const output = () => {
        if (pathname === "/results") {
            return (
                <p>
                    filed to:{" "}
                    <span className={styles.section}>{data.section_name}</span>{" "}
                    on {pubDate.toLocaleDateString("en-US")}
                </p>
            )
        } else if (pathname === "/trending") {
            return (
                <h2>
                    filed to:{" "}
                    <span className={styles.author}>{data.section}</span>
                </h2>
            )
        } else if (pathname === "/favorites") {
            return (
                <h2 className={styles.favFlexContainer}>
                    <span className={styles.favText}>
                        added to favs on: {data.date_added_by_user}
                    </span>
                </h2>
            )
        } else {
            return (
                <h2>
                    filed to:{" "}
                    <span className={styles.author}>
                        {topStorySubject.displayTerm}
                    </span>
                </h2>
            )
        }
    }

    return (
        <footer className={styles.footer}>
            {output()}

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
