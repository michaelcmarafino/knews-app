import styles from "./SidebarBtn.module.css"
import { ReactComponent as TrashIcon } from "../../images/trash.svg"
import { useState } from "react"

export default function SidebarBtn({ fav, handleRemove }) {
    const [isBtnShowing, setIsBtnShowing] = useState(false)
    return (
        <div
            key={fav?.url || fav?.web_url}
            id={fav.uri}
            className={styles.flexContainer}
            onMouseOver={() => setIsBtnShowing(true)}
            onMouseLeave={() => setIsBtnShowing(false)}>
            <a
                href={fav?.url || fav?.web_url}
                className={styles.favLink}
                target="_blank"
                rel="noopener noreferrer">
                {fav?.title || fav?.headline.main}
            </a>
            {isBtnShowing ? (
                <span className={styles.removeBtn} onClick={handleRemove}>
                    <TrashIcon
                        title="Remove Favorite"
                        className={styles.trashIcon}
                    />
                </span>
            ) : null}
        </div>
    )
}
