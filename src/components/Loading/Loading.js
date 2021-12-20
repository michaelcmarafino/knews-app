import ContentLoader from "react-content-loader"

export default function Loading() {
    return (
        // <div className={styles.container}>
        //     <h2 className={styles.title}>Loading...</h2>
        // </div>
        <ContentLoader
            style={{ marginLeft: "2em", marginBottom: "2em" }}
            height={1000}
            width={700}
            backgroundColor="#b8b7b7">
            <rect x="0" y="5" rx="5" ry="5" width="670" height="300" />
            <rect x="0" y="335" rx="4" ry="5" width="600" height="25" />
            <rect x="0" y="375" rx="4" ry="5" width="600" height="25" />
            <rect x="0" y="425" rx="3" ry="3" width="500" height="22" />
            <rect x="0" y="460" rx="3" ry="3" width="500" height="22" />
            <rect x="0" y="525" rx="5" ry="5" width="670" height="300" />
            <rect x="0" y="855" rx="4" ry="5" width="600" height="25" />
            <rect x="0" y="895" rx="4" ry="5" width="600" height="25" />
            <rect x="0" y="945" rx="3" ry="3" width="500" height="22" />
            <rect x="0" y="980" rx="3" ry="3" width="500" height="22" />
        </ContentLoader>
    )
}
