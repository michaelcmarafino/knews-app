import styles from "./Trending.module.css"
import StoryList from "../../components/StoryList/StoryList"
import SideBar from "../../components/Sidebar/Sidebar"
import { useEffect, useState } from "react"
import Loading from "../../components/Loading/Loading"

export default function Trending() {
    const [trendingArticles, setTrendingArticles] = useState([])
    const [isLoading, setIsLoading] = useState(false)

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
                    <StoryList trendingPageStyles data={trendingArticles} />
                )}
            </div>
        </div>
    )
}
