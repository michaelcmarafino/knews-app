import styles from "./MobileMenu.module.css"
import { ReactComponent as CloseNav } from "../../images/close-nav.svg"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function MobileMenu({ toggleMenu }) {
    return (
        <motion.section className={styles.container}>
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
                <Link onClick={toggleMenu} className={styles.link} to="/">
                    <li className={styles.listItem}>HOME</li>
                </Link>
                <Link
                    onClick={toggleMenu}
                    className={styles.link}
                    to="/trending">
                    <li className={styles.listItem}>TRENDING</li>
                </Link>
                <Link
                    onClick={toggleMenu}
                    className={styles.link}
                    to="/favorites">
                    <li className={styles.listItem}>FAVORITES</li>
                </Link>
                <li className={styles.listItem}>SEARCH</li>
            </ul>
        </motion.section>
    )
}
