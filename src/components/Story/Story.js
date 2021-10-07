// import Favorite from "../Favorite/Favorite"
import styles from "./Story.module.css"

function Story({ data }) {
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
            <h2>
                filed to: <span className={styles.author}>{data.section}</span>
            </h2>
            {/* <Favorite /> */}
            <hr className={styles.divider} />
        </div>
    )
}

export default Story
