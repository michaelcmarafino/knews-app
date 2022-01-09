import styles from "./Favorite.module.css"
import StoryFooter from "../StoryFooter/StoryFooter"

export default function Favorite({ datum }) {
    const nytimes = "https://nytimes.com/"
    function imgURL() {
        if (datum.isResult && datum.multimedia?.[0]?.url) {
            return nytimes + datum.multimedia[0].url
        } else if (datum.multimedia?.[0]?.url) {
            return datum.multimedia[0].url
        } else if (datum.media?.[0]?.["media-metadata"]?.[2]?.url) {
            return datum.media[0]["media-metadata"][2].url
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <a
                    target="_blank"
                    href={datum?.url || datum?.web_url}
                    className={styles.favorite}
                    rel="noreferrer">
                    {datum?.title || datum?.headline.main}
                </a>
                <p>{datum.abstract}</p>
            </div>
            <div className={styles.imgContainer}>
                <img
                    className={styles.img}
                    src={
                        imgURL()
                            ? imgURL()
                            : "https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg"
                    }
                    alt={imgURL()}
                />
                <StoryFooter data={datum} />
            </div>
        </div>
    )
}
