import styles from "./Story.module.css"
import { useContext, useState, useEffect } from "react"
import { Context } from "../../Context"
import { ReactComponent as FavIcon } from "../../images/fav.svg"
import { ReactComponent as UnfavIcon } from "../../images/unfav.svg"
import cx from "classnames"

function Story({ data, trending }) {
    const { setFavArr, favArr } = useContext(Context)
    const [isFav, setIsFav] = useState(false)

    const handleFav = () => {
        // set favorite to the opposite of what it is
        setIsFav(!isFav)
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
                [styles.trending]: trending,
            })}>
            <div className={styles.imageContainer}>
                {data.id ? (
                    <img
                        className={styles.img}
                        // src={data.media["media-metadata"][2].url}
                        alt={data.media.caption}
                    />
                ) : (
                    <img
                        className={styles.img}
                        alt={data.multimedia[0].caption}
                        src={data.multimedia[0].url}
                    />
                )}
            </div>

            <h1>
                <a
                    className={styles.title}
                    href={data.url}
                    target="_blank"
                    rel="noopener noreferrer">
                    {data.title}
                </a>
            </h1>
            <h4 className={styles.abstract}>{data.abstract}</h4>
            <h5 className={styles.byline}>{data.byline}</h5>
            <footer className={styles.footer}>
                <h2>
                    filed to:{" "}
                    <span className={styles.author}>{data.section}</span>
                </h2>
                <div onClick={handleFav}>
                    {!isFav ? (
                        <UnfavIcon className={styles.favIcon} />
                    ) : (
                        <FavIcon className={styles.favIcon} />
                    )}
                </div>
            </footer>
            <hr className={styles.divider} />
        </div>
    )
}

export default Story
