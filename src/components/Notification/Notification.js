import styles from "./Notification.module.css"
import { ImCheckboxChecked } from "react-icons/im"
import { motion } from "framer-motion"

export default function Notification({ open, children, bottomPos }) {
    if (!open) return null
    return (
        <motion.div
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: -30 }}
            transition={{ duration: 0.15 }}
            className={styles.container}
            style={{ bottom: bottomPos }}>
            {children}
            <ImCheckboxChecked
                color={"#F27E7C"}
                style={{ padding: "10px" }}
                size={45}
            />
        </motion.div>
    )
}
