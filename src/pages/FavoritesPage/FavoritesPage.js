import styles from "./FavoritesPage.module.css"
// import StoryList from "../../components/StoryList/StoryList"
import { useContext, useEffect } from "react"
import { Context } from "../../Context"
import { APP_TITLE } from "../../helpers/globalVariables"
import FavoriteList from "../../components/FavoriteList/FavoriteList"

export default function FavoritesPage() {
    const { favArr } = useContext(Context)

    //change tab title when rendering
    useEffect(() => {
        document.title = `Favorites - ${APP_TITLE}`
    }, [])

    return (
        <div className={styles.favorites}>
            <h1 className={styles.title}>Favorites</h1>
            {favArr.length ? (
                // <StoryList favoritePageStyles data={favArr} />
                <FavoriteList data={favArr} />
            ) : (
                <div style={{ height: "70vh" }}>
                    <h1
                        style={{
                            color: "var(--accent-color",
                            marginTop: "2rem",
                        }}>
                        Add a favorite to see it listed here...
                    </h1>
                </div>
            )}
        </div>
    )
}
