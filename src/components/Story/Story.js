import styles from "./Story.module.css"
import StoryFooter from "../StoryFooter/StoryFooter"
import nytimesLogo from "../../images/nytimesLogo.jpeg"

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
                                : nytimesLogo
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
                                : nytimesLogo
                        }
                    />
                )}
            </div>
            <div className={`${styles.content} ${styles.trendingContent}`}>
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
                <StoryFooter bottomPos={"100px"} data={data} />
            </div>

            <hr className={styles.divider} />
        </div>
    )
}

export default Story
