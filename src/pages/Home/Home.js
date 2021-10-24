import styles from "./Home.module.css"
import StoryList from "../../components/StoryList/StoryList"
import SideBar from "../../components/Sidebar/Sidebar"
import { useContext } from "react"
import { Context } from "../../Context"

function Home() {
    const { articles, favArr } = useContext(Context)
    console.log(`This is the favArr from home page: ${favArr}`)
    return (
        <div className={styles.home}>
            <SideBar favArr={favArr} />
            <StoryList data={articles} />
        </div>
    )
}

export default Home
