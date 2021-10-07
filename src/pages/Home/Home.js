import React from "react"
import styles from "./Home.module.css"
import StoryList from "../../components/StoryList/StoryList"
import SideBar from "../../components/Sidebar/Sidebar"

function Home() {
    return (
        <div className={styles.home}>
            <SideBar />
            <StoryList />
        </div>
    )
}

export default Home