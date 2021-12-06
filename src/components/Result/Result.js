import StoryFooter from "../StoryFooter/StoryFooter"
import styles from "./Result.module.css"

export default function Result({ datum }) {
    const nytimes = "https://nytimes.com/"
    return (
        <div className={styles.flexContainer}>
            <div
                className={styles.imgContainer}
                style={{
                    flex:
                        parseInt(nytimes + datum.multimedia?.[0]?.width) /
                        parseInt(nytimes + datum.multimedia?.[0]?.height),
                }}>
                <img
                    className={styles.img}
                    src={
                        datum.multimedia?.[0]?.url
                            ? nytimes + datum.multimedia[0].url
                            : "https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg"
                    }
                    alt=""
                />
            </div>
            <div className={styles.infoContainer}>
                <a
                    className={styles.title}
                    href={datum.web_url}
                    target="_blank"
                    rel="noopener noreferrer">
                    {datum.headline.main}
                </a>
                <p className={styles.abstract}>{datum.abstract}</p>
                <h4 className={styles.author}>{datum.byline.original}</h4>
                <StoryFooter data={datum} />
            </div>
        </div>
    )
}
