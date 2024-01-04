import styles from "../layaut/main/users/Users.module.css";
import React, {useState} from "react";
import {Button2a} from "./Button";


type PropsType = {
    totalCount: number
    pageSize: number
    currentPage: number
    portionSize: number
    onClickHandler: (page: number) => void
}

export  const Paginator = (props: PropsType) => {

    const { totalCount, pageSize, portionSize = 10, currentPage, onClickHandler} = props
    let pagesCount = Math.ceil(totalCount / pageSize)
    let pages = []
    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={styles.pages}>
            {portionCount > 1 &&
            <Button2a onClick={() => setPortionNumber(portionNumber - 1)} name={'<< Prev'} key={1} />}

            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => <div key={p}
                                 className={currentPage === p ? styles.selected : styles.page}
                                 onClick={()=>{onClickHandler(p)}}
            >{p}</div>)}
            {portionCount > portionNumber &&
                <Button2a onClick={() => setPortionNumber(portionNumber + 1)} name={'Next >>'}/>}
        </div>
    )
}