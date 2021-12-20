import Story from "../Story/Story"
import styles from "./StoryList.module.css"
import Loading from "../Loading/Loading"
import cx from "classnames"
import ReactPaginate from "react-paginate"
import { scrollToTop } from "../../helpers/helpers"

export default function StoryList({
    data,
    trendingPageStyles,
    favoritePageStyles,
    currentPage,
    setCurrentPage,
}) {
    const articlesPerPage = 10
    const pagesVisited = currentPage * articlesPerPage

    const pageCount = Math.ceil(data.length / articlesPerPage)
    const changePage = ({ selected }) => {
        setCurrentPage(selected)
        scrollToTop()
    }

    return (
        <div className={styles.flexContainer}>
            <div
                className={cx({
                    [styles.container]: true,
                    [styles.favoritePageStyles]: favoritePageStyles,
                    [styles.trendingPageStyles]: trendingPageStyles,
                })}>
                {data.length === 0 ? (
                    <Loading />
                ) : (
                    data
                        .slice(pagesVisited, pagesVisited + articlesPerPage)
                        .map((datum) => <Story data={datum} key={datum.uri} />)
                )}
                {console.log("I rendered the StoryList")}
            </div>
            <ReactPaginate
                previousLabel="< Previous"
                nextLabel="Next >"
                breakLabel="..."
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={styles.paginateContainer}
                pageLinkClassName={styles.listItem}
                previousLinkClassName={styles.listItem}
                nextLinkClassName={styles.listItem}
                activeLinkClassName={styles.active}
                disabledLinkClassName={styles.disabled}
                renderOnZeroPageCount={null}
                forcePage={currentPage}
            />
        </div>
    )
}
