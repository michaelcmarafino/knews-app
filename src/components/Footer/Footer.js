import styles from "./Footer.module.css"
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa"

export default function Footer() {
    return (
        <div>
            <div className={styles.top}></div>
            <div className={styles.container}>
                {/*<p>Proudly made by Michael Marafino</p> */}
                <div className={styles.socials}>
                    <ul className={styles.flexContainer}>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/michael-c-marafino/"
                                target="_blank"
                                rel="noreferrer"
                                title="Linkedin">
                                <FaLinkedinIn
                                    className={styles.icons}
                                    color={"var(--accent-color)"}
                                    style={{ padding: "10px" }}
                                    size={50}
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/michaelcmarafino/knews-app"
                                target="_blank"
                                rel="noreferrer"
                                title="Github">
                                <FaGithub
                                    className={styles.icons}
                                    color={"var(--accent-color)"}
                                    style={{ padding: "10px" }}
                                    size={50}
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://twitter.com/michaelmarafino"
                                target="_blank"
                                rel="noreferrer"
                                title="Twitter">
                                <FaTwitter
                                    className={styles.icons}
                                    color={"var(--accent-color)"}
                                    style={{ padding: "10px" }}
                                    size={50}
                                />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.btns}>
                    {/* <a href="https://developer.nytimes.com/" title="NYT API">
                        Powered by the NY Times API
                    </a> */}
                    <p>&copy; Long Island Sound Ledger. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}
