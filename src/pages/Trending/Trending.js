import styles from "./Trending.module.css"
import StoryList from "../../components/StoryList/StoryList"
import SideBar from "../../components/Sidebar/Sidebar"
import { useContext } from "react"
import { Context } from "../../Context"

export default function Trending() {
    const { favArr, trendingArticles } = useContext(Context)

    return (
        <div className={styles.trending}>
            <SideBar favArr={favArr} />
            <StoryList trending data={trendingArticles} />
        </div>
    )
}
