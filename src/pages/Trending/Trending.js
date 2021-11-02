import styles from "./Trending.module.css"
import StoryList from "../../components/StoryList/StoryList"
import SideBar from "../../components/Sidebar/Sidebar"
import { useContext } from "react"
import { Context } from "../../Context"

export default function Trending() {
    const { trendingArticles } = useContext(Context)

    return (
        <div className={styles.trending}>
            <h1 className={styles.title}>Trending</h1>
            <SideBar />
            <StoryList trendingPageStyles data={trendingArticles} />
        </div>
    )
}
