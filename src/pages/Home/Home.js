import styles from "./Home.module.css"
import StoryList from "../../components/StoryList/StoryList"
import SideBar from "../../components/Sidebar/Sidebar"
import { useContext } from "react"
import { Context } from "../../Context"

function Home() {
    const { articles } = useContext(Context)
    return (
        <div className={styles.home}>
            <h1 className={styles.title}>Top Stories</h1>
            <SideBar />
            <StoryList data={articles} />
        </div>
    )
}

export default Home
