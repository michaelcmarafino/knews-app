import Story from "../Story/Story"
import styles from "./StoryList.module.css"

function StoryList({ data, trending }) {
    return (
        <div className={styles.container}>
            {data.map((datum) => (
                <Story data={datum} key={datum.uri} />
            ))}
            {console.log("I rendered the StoryList")}
        </div>
    )
}

export default StoryList
