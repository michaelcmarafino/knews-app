import Story from "../Story/Story"
import styles from "./StoryList.module.css"
import { useContext } from "react"
import { Context } from "../../Context"

function StoryList({ data }) {
    const { favArr } = useContext(Context)
    return (
        <div className={styles.container}>
            {data.map((datum) => (
                <Story data={datum} key={datum.uri} />
            ))}
            {console.log("I rendered")}
            {console.log(favArr)}
        </div>
    )
}

export default StoryList
