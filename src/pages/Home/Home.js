import styles from "./Home.module.css"
import StoryList from "../../components/StoryList/StoryList"
import SideBar from "../../components/Sidebar/Sidebar"
import FilterButton from "../../components/FilterButton/FilterButton"
import { useContext } from "react"
import { Context } from "../../Context"

function Home() {
    const { articles, topStorySubject } = useContext(Context)
    var options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    }
    const date = new Date().toLocaleDateString("en-US", options)
    const filterBtnText = [
        "arts",
        "books",
        "fashion",
        "food",
        "health",
        "home",
        "insider",
        "magazine",
        "movies",
        "nyregion",
        "obituaries",
        "opinion",
        "politics",
        "realestate",
        "science",
        "sports",
        "sundayreview",
        "technology",
        "theater",
        "travel",
        "upshot",
        "us",
        "world",
    ]

    const btns = filterBtnText.map((b) => <FilterButton text={b} />)

    return (
        <div className={styles.home}>
            <h1 className={styles.title}>
                Top Stories in{" "}
                <span className={styles.section}>{topStorySubject}</span> on{" "}
                {date}
            </h1>
            <div className={styles.filterBtnsContainer}>{btns}</div>
            <SideBar expandedHome />
            <StoryList data={articles} />
        </div>
    )
}

export default Home
