import styles from "./Story.module.css"
import StoryFooter from "../StoryFooter/StoryFooter"

function Story({ data }) {
    return (
        <div className={styles.container}>
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
                        alt={data.title}
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
                <StoryFooter data={data} />
            </div>

            <hr className={styles.divider} />
        </div>
    )
}

export default Story
