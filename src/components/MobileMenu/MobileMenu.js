import styles from "./MobileMenu.module.css"
import { ReactComponent as CloseNav } from "../../images/close-nav.svg"
import { motion } from "framer-motion"

export default function MobileMenu({ toggleMenu }) {
    return (
        <motion.section className={styles.container} animate={{ y: 100 }}>
            <div className={styles.mobileIconContainer}>
                <CloseNav
                    className={styles.mobileNavBtn}
                    fill="white"
                    stroke="white"
                    title="Close"
                    onClick={toggleMenu}
                />
            </div>
            <ul className={styles.flexContainer}>
                <li className={styles.listItem}>HOME</li>
                <li className={styles.listItem}>TRENDING</li>
                <li className={styles.listItem}>FAVORITES</li>
                <li className={styles.listItem}>SEARCH</li>
            </ul>
        </motion.section>
    )
}
