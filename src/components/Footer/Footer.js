import styles from "./Footer.module.css"

export default function Footer() {
    return (
        <div>
            <div className={styles.top}></div>
            <div className={styles.container}>
                <p>Proudly made in 🇺🇸by Michael Marafino</p>
                <div className={styles.socials}>
                    <ul className={styles.icons}>
                        <li>Linkedin icon</li>
                        <li>github icon</li>
                    </ul>
                </div>
                <div className={styles.netlify}>
                    <p>Deployed by Netlify</p>
                </div>
            </div>
        </div>
    )
}
