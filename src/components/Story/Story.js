import styles from "./Story.module.css"
import { useContext, useState } from "react"
import { Context } from "../../Context"
import { ReactComponent as FavIcon } from "../../images/fav.svg"
import { ReactComponent as UnfavIcon } from "../../images/unfav.svg"

function Story({ data }) {
    const { setFavArr, favArr } = useContext(Context)
    const [isFav, setIsFav] = useState(false)

    const handleFav = () => {
        setIsFav(!isFav)
        !isFav
            ? setFavArr([...favArr, data])
            : setFavArr((prevArr) => prevArr.filter((item) => item !== data))
    }

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img
                    alt={data.multimedia[0].caption}
                    className={styles.img}
                    src={data.multimedia[0].url}
                />
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
                    {isFav ? (
                        <FavIcon className={styles.favIcon} />
                    ) : (
                        <UnfavIcon className={styles.favIcon} />
                    )}
                </div>
            </footer>
            <hr className={styles.divider} />
        </div>
    )
}

export default Story
