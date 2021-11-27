import styles from "./Story.module.css"
import { useContext, useState, useEffect } from "react"
import { Context } from "../../Context"
import { ReactComponent as FavIcon } from "../../images/fav.svg"
import { ReactComponent as UnfavIcon } from "../../images/unfav.svg"
import cx from "classnames"

function Story({ data }) {
    const { setFavArr, favArr } = useContext(Context)
    const [isFav, setIsFav] = useState(false)

    const handleFav = (e) => {
        // set favorite to the opposite of what it is
        setIsFav((prev) => !prev)

        const localStorageData = JSON.parse(localStorage.getItem("favArr"))
        // const currentLocalStorage = localStorageData.map(item => item.uri)
        // if(isFav && currentLocalStorage.includes(e.target.name)) {

        // }
        const filtered = localStorageData.filter(
            (item) => item.uri !== e.target.name
        )
        localStorage.setItem("favArr", JSON.stringify(filtered))

        console.log("name:", e.target.getAttribute("name"))

        // if it is a favorite, add it to the favArr, if it isnt then filter out
        !isFav
            ? setFavArr([...favArr, data])
            : setFavArr((prevArr) => prevArr.filter((item) => item !== data))
    }

    useEffect(() => {
        let itemId = favArr.map((item) => item.uri)
        itemId.includes(data.uri) && setIsFav(true)
    }, [])

    return (
        <div
            className={cx({
                [styles.container]: true,
            })}>
            <div className={styles.imageContainer}>
                {data.id ? (
                    <img
                        className={styles.img}
                        src={
                            data.media[0]?.["media-metadata"]?.[2]?.url
                                ? data.media[0]["media-metadata"][2].url
                                : "https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg"
                        }
                        alt={data.media.caption}
                    />
                ) : (
                    <img
                        className={styles.img}
                        alt={""}
                        src={
                            data.multimedia?.[0]?.url
                                ? data.multimedia[0].url
                                : "https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg"
                        }
                    />
                )}
            </div>
            <div className={styles.content}>
                <h1>
                    <a
                        className={styles.title}
                        href={data.url}
                        target="_blank"
                        rel="noopener noreferrer">
                        {data.title}
                    </a>
                </h1>
                <h2 className={styles.abstract}>{data.abstract}</h2>
                <h3 className={styles.byline}>{data.byline}</h3>
            </div>

            <footer className={styles.footer}>
                <h2>
                    filed to:{" "}
                    <span className={styles.author}>{data.section}</span>
                </h2>
                <div onClick={handleFav} name={data.uri}>
                    {!isFav ? (
                        <UnfavIcon
                            title="Add Favorite"
                            className={styles.favIcon}
                        />
                    ) : (
                        <FavIcon
                            name={data.uri}
                            title="Remove Favorite"
                            className={styles.favIcon}
                        />
                    )}
                </div>
            </footer>
            <hr className={styles.divider} />
        </div>
    )
}

export default Story
