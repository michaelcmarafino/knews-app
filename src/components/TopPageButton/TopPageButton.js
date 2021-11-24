import styles from "./TopPageButton.module.css"
import { ReactComponent as TopPageIcon } from "../../images/up-arrow.svg"
import useScrollEffect from "../../hooks/useScrollEffect"

export default function TopPageButton() {
    const [isVisible] = useScrollEffect()
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }
    return (
        <div
            className={styles.container}
            onClick={scrollToTop}
            style={{ display: isVisible ? "none" : "block" }}>
            <span className={styles.icon}>
                <TopPageIcon />
            </span>
        </div>
    )
}
