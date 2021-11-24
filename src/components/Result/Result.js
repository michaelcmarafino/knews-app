import styles from "./Result.module.css"

export default function Result({ datum }) {
    const date = new Date(datum.pub_date)
    return (
        <div className={styles.flexContainer}>
            <div className={styles.imgContainer}>
                <img src={datum.multimedia?.[0]?.url} alt="" />
            </div>
            <div className={styles.infoCotainer}>
                <h3 className={styles.title}>
                    <a
                        href={datum.web_url}
                        target="_blank"
                        rel="noopener noreferrer">
                        {datum.headline.main}
                    </a>
                </h3>
                <h4>{datum.abstract}</h4>
                <h4>{datum.byline.original}</h4>
                <p>
                    filed to: {datum.section_name} on{" "}
                    {date.toLocaleDateString("en-US")}
                </p>
            </div>
        </div>
    )
}
