import styles from "./Trending.module.css"
import StoryList from "../../components/StoryList/StoryList"
import SideBar from "../../components/Sidebar/Sidebar"
import { useContext, useEffect, useState } from "react"
import { Context } from "../../Context"

export default function Trending() {
    const { favArr } = useContext(Context)
    const [trendingArticles, setTrendingArticles] = useState([])

    const TRENDING_URL = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`

    useEffect(() => {
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
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div className={styles.trending}>
            <SideBar favArr={favArr} />
            <StoryList trending data={trendingArticles} />
        </div>
    )
}
