import styles from "./Home.module.css"
import StoryList from "../../components/StoryList/StoryList"
import SideBar from "../../components/Sidebar/Sidebar"
import FilterButton from "../../components/FilterButton/FilterButton"
import { useContext, useEffect } from "react"
import { Context } from "../../Context"
import { APP_TITLE } from "../../helpers/globalVariables"

export default function Home() {
    const { articles, topStorySubject } = useContext(Context)

    //change tab title when rendering
    useEffect(() => {
        document.title = `${APP_TITLE} - What's happening now`
    }, [])

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    }
    const date = new Date().toLocaleDateString("en-US", options)
    const filterBtnText = [
        { filterTerm: "arts", displayTerm: "Arts" },
        { filterTerm: "books", displayTerm: "Books" },
        { filterTerm: "business", displayTerm: "Business" },
        { filterTerm: "fashion", displayTerm: "Fashion" },
        { filterTerm: "food", displayTerm: "Food" },
        { filterTerm: "health", displayTerm: "Health" },
        { filterTerm: "home", displayTerm: "Home" },
        { filterTerm: "insider", displayTerm: "Insider" },
        { filterTerm: "movies", displayTerm: "Movies" },
        { filterTerm: "nyregion", displayTerm: "NY Region" },
        { filterTerm: "obituaries", displayTerm: "Obituaries" },
        { filterTerm: "opinion", displayTerm: "Opinion" },
        { filterTerm: "politics", displayTerm: "Politics" },
        { filterTerm: "realestate", displayTerm: "Real Estate" },
        { filterTerm: "science", displayTerm: "Science" },
        { filterTerm: "sports", displayTerm: "Sports" },
        { filterTerm: "sundayreview", displayTerm: "Sunday Review" },
        { filterTerm: "technology", displayTerm: "Tech" },
        { filterTerm: "theater", displayTerm: "Theater" },
        { filterTerm: "travel", displayTerm: "Travel" },
        { filterTerm: "upshot", displayTerm: "Upshot" },
        { filterTerm: "us", displayTerm: "United States" },
        { filterTerm: "world", displayTerm: "World" },
    ]

    const btns = filterBtnText.map((b) => (
        <FilterButton key={b.filterTerm} btnInfo={b} />
    ))

    // const titleText = filterBtnText.filter((item) =>
    //     item.filterTerm.includes(topStorySubject)
    // )

    return (
        <div className={styles.home}>
            <h1 className={styles.title}>
                Top Stories in{" "}
                <span className={styles.section}>
                    {topStorySubject.displayTerm}
                </span>{" "}
                on {date}
            </h1>
            <div className={styles.filterBtnsContainer}>{btns}</div>
            <div className={styles.flexContainer}>
                <SideBar className={styles.sidebar} expandedHome />
                <StoryList data={articles} />
            </div>
        </div>
    )
}
