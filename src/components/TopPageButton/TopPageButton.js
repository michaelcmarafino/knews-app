import styles from "./TopPageButton.module.css"
import { ReactComponent as TopPageIcon } from "../../images/up-arrow.svg"
import useScrollEffect from "../../hooks/useScrollEffect"
import { scrollToTop } from "../../helpers/helpers"

export default function TopPageButton() {
    const [isVisible] = useScrollEffect()
    return (
        <div
            className={styles.container}
            onClick={scrollToTop}
            style={{ display: isVisible ? "none" : "block" }}>
            <div className={styles.icon}>
                <TopPageIcon title="Top of Page" />
            </div>
        </div>
    )
}
