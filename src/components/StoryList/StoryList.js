import Story from "../Story/Story"
import styles from "./StoryList.module.css"
import Loading from "../Loading/Loading"
import cx from "classnames"

function StoryList({ data, trendingPageStyles, favoritePageStyles }) {
    return (
        <div
            className={cx({
                [styles.container]: true,
                [styles.favoritePageStyles]: favoritePageStyles,
                [styles.trendingPageStyles]: trendingPageStyles,
            })}>
            {data.length === 0 ? (
                <Loading />
            ) : (
                data
                    .slice(0, 10)
                    .map((datum) => <Story data={datum} key={datum.uri} />)
            )}
            {console.log("I rendered the StoryList")}
        </div>
    )
}

export default StoryList
