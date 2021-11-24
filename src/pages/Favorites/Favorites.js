import styles from "./Favorites.module.css"
import StoryList from "../../components/StoryList/StoryList"
import { useContext } from "react"
import { Context } from "../../Context"

export default function Favorites() {
    const { favArr } = useContext(Context)
    return (
        <div className={styles.favorites}>
            <h1 className={styles.title}>Favorites</h1>
            {favArr.length ? (
                <StoryList favoritePageStyles data={favArr} />
            ) : (
                <h1 style={{ color: "black", height: "100vh" }}>
                    Add a favorite to see it listed here...
                </h1>
            )}
        </div>
    )
}
