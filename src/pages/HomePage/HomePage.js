import styles from "./HomePage.module.css"
import StoryList from "../../components/StoryList/StoryList"
import SideBar from "../../components/Sidebar/Sidebar"
import FilterButton from "../../components/FilterButton/FilterButton"
import { useContext, useEffect, useState } from "react"
import { Context } from "../../Context"
import { APP_TITLE } from "../../helpers/globalVariables"

export default function HomePage() {
    const { articles, topStorySubject, setArticles } = useContext(Context)
    const [currentPage, setCurrentPage] = useState(0)

    //change tab title when rendering
    useEffect(() => {
        document.title = `${APP_TITLE}`
    }, [])

    const TOP_STORIES_URL = `https://api.nytimes.com/svc/topstories/v2/${topStorySubject.filterTerm}.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`

    useEffect(() => {
        fetch(TOP_STORIES_URL)
            .then(res => {
                if (!res.ok) {
                    throw Error("Couldn't get your articles")
                }
                return res.json()
            })
            .then(dataResults => {
                const data = dataResults.results
                    .filter(item => item.section !== "admin")
                    .filter(item => item.item_type !== "Promo")
                setArticles(data)

                console.log("Got data for home page")
                console.log("current page: ", currentPage)
            })
            .catch(err => {
                console.log(err)
                if (err === 429) {
                    console.log("Too many requests")
                }
                // Place default error page here - make component
            })
    }, [TOP_STORIES_URL])

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

    const btns = filterBtnText.map(b => (
        <FilterButton
            key={b.filterTerm}
            btnInfo={b}
            setCurrentPage={setCurrentPage}
        />
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
                <StoryList
                    data={articles}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
    )
}
