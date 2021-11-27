import styles from "./Page404.module.css"
import { useEffect } from "react"
import { APP_TITLE } from "../../helpers/globalVariables"
import { Link } from "react-router-dom"

export default function Page404() {
    //change tab title when rendering
    useEffect(() => {
        document.title = `Page Not Found - ${APP_TITLE}`
    }, [])

    return (
        <section className={styles.container}>
            <div>
                <h2 className={styles.notFound}>404 Page Not Found</h2>
                <Link to={"/"}>
                    <p className={styles.returnHome}>Back to Home</p>
                </Link>
            </div>
        </section>
    )
}
