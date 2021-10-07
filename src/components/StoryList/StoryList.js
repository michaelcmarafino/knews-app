import { useContext } from "react"
import { Context } from "../../Context"
import Story from "../Story/Story"
import styles from "./StoryList.module.css"

function StoryList() {
    const { articles } = useContext(Context)

    return (
        <div className={styles.container}>
            {articles.map((article) => (
                <Story data={article} key={article.created_date} />
            ))}
        </div>
    )
}

export default StoryList
