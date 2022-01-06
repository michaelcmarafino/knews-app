import styles from "./FavoriteList.module.css"
import { Context } from "../../Context"
import { useContext } from "react"

export default function FavoriteList() {
    const { favArr } = useContext(Context)
    console.log(favArr)
    return (
        <div className={styles.container}>
            {favArr.map((fav) => (
                <p>This is a fav</p>
            ))}
        </div>
    )
}
