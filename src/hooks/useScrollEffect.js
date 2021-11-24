import { useState, useEffect } from "react"

export default function useScrollEffect() {
    const [top, setTop] = useState(true)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = (e) => {
            let scrolled = document.scrollingElement.scrollTop
            if (scrolled >= 200) {
                setTop(false)
                setIsVisible(true)
            } else {
                setTop(true)
                setIsVisible(false)
            }
        }
        document.addEventListener("scroll", handleScroll)
        return () => {
            document.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return [top, isVisible]
}
