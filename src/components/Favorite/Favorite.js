import styles from "./Favorite.module.css"
import StoryFooter from "../StoryFooter/StoryFooter"

export default function Favorite({ datum }) {
    const nytimes = "https://nytimes.com/"
    const pubDate = new Date(datum?.published_date || datum?.pub_date)
    const formattedPubDate = pubDate.toLocaleDateString("en-US")
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
                    className={styles.title}
                    rel="noreferrer">
                    {datum?.title || datum?.headline.main}
                </a>
                <p className={styles.abstract}>{datum.abstract}</p>
                <p className={styles.byline}>
                    {datum.byline?.original || datum?.byline}
                </p>
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
                <p className={styles.pubDate}>
                    published on: {formattedPubDate}
                </p>
                <StoryFooter data={datum} />
            </div>
        </div>
    )
}
