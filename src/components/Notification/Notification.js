import styles from "./Notification.module.css"
import { ImCheckboxChecked } from "react-icons/im"

export default function Notification({ open, children }) {
    if (!open) return null
    return (
        <div className={styles.container}>
            {children}
            <ImCheckboxChecked
                color={"#F27E7C"}
                style={{ padding: "10px" }}
                size={45}
            />
        </div>
    )
}
