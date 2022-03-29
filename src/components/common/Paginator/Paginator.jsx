import React from 'react';
import styles from "./Paginator.module.css";

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    // 100 вместо totalUsersCount
    let pagesCount = Math.ceil( 100/ pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div className={styles.pagination}>
            {pages.map(p => {
                return <span className={currentPage === p ? styles.selectedPage : styles.allPages}
                             onClick={(e) => {
                                 onPageChanged(p);
                             }}>{p}</span>
            })}
        </div>
}

export default Paginator;