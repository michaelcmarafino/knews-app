import styles from "./TrendingPage.module.css"
import StoryList from "../../components/StoryList/StoryList"
import SideBar from "../../components/Sidebar/Sidebar"
import { useEffect, useState } from "react"
import Loading from "../../components/Loading/Loading"
import { APP_TITLE } from "../../helpers/globalVariables"

export default function TrendingPage() {
    const [trendingArticles, setTrendingArticles] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(0)

    //change tab title when rendering
    useEffect(() => {
        document.title = `Trending - ${APP_TITLE}`
    }, [])

    const TRENDING_URL = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`

    useEffect(() => {
        setIsLoading(true)
        fetch(TRENDING_URL)
            .then((res) => {
                if (!res.ok) {
                    throw Error(
                        "Couldn't get your trending articles. Please try again"
                    )
                }
                return res.json()
            })
            .then((data) => {
                setTrendingArticles(data.results)
                setIsLoading(false)
                console.log("Got data for trending page")
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div className={styles.trending}>
            <h1 className={styles.title}>Trending</h1>
            <div className={styles.flexContainer}>
                <SideBar />
                {isLoading ? (
                    <Loading />
                ) : (
                    <StoryList
                        trendingPageStyles
                        data={trendingArticles}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                )}
            </div>
        </div>
    )
}
