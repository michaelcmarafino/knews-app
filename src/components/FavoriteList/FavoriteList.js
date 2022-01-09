import styles from "./FavoriteList.module.css"
import { Context } from "../../Context"
import { useContext } from "react"
import Favorite from "../Favorite/Favorite"

export default function FavoriteList() {
    const { favArr } = useContext(Context)
    console.log(favArr)
    return (
        <div className={styles.container}>
            {favArr.map((fav) => (
                <Favorite datum={fav} key={fav.uri} />
            ))}
        </div>
    )
}
