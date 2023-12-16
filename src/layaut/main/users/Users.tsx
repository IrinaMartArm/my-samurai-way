import React from 'react';
import {UserType} from "../../../redux/UsersReducer";
import {Button} from "../../../components/Button";
import styles from "./Users.module.css"
import userPhoto from './../../../assets/images/585e4beacb11b227491c3399.png'
import {NavLink} from "react-router-dom";
import { Api } from '../../../api/Api';



type UserPropsType = {
    users: UserType[]
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    onClickHandler: (p: number) => void
    setBlocked: (userId: string, inProgress: boolean) => void
    totalCount: number
    pageSize: number
    currentPage: number
    blocked: Array<string>
}

export function Users(props: UserPropsType) {
    const {users, follow, unfollow, totalCount, pageSize, currentPage, onClickHandler, setBlocked, } = props

    let pagesCount = Math.ceil(totalCount / pageSize)
    let pages = []
    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={styles.box}>
            <div className={styles.pages}>
                {pages.map(p => <div key={p}
                                              className={currentPage === p ? styles.selected : styles.page}
                                              onClick={()=>{onClickHandler(p)}}
                >{p}</div>)}
            </div>
            {users.map(u =>
                <div key={u.id} className={styles.box_item}>
                        <span className={styles.item_follow}>
                            <NavLink to={'./profile/' + u.id}>
                                 <img src={u.photos.small != null ? u.photos.small : userPhoto} alt={u.name} className={styles.avatar}/>
                            </NavLink>
                            {u.followed ?
                                <Button name={'follow'}
                                        disabled={props.blocked.some(id => id === u.id)}
                                        onClick={()=> {
                                            setBlocked(u.id, true)
                                    Api.unfollow(u.id)
                                        .then((res) => {
                                            if(res.data.resultCode === 0){
                                                unfollow(u.id)
                                            }
                                            setBlocked(u.id, false)
                                        })
                                }} key={u.id}></Button> :
                                <Button name={'unfollow'} disabled={props.blocked.some(id => id === u.id)}
                                        onClick={()=> {
                                            setBlocked(u.id, true)
                                    Api.follow(u.id)
                                        .then((res) => {
                                            if(res.data.resultCode === 0){
                                                follow(u.id)
                                            }
                                            setBlocked(u.id, false)
                                        })
                                }} key={u.id}></Button>}

                        </span>
                    <div className={styles.item_info}>
                            <span className={styles.item_name}>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                    </div>
                </div>)}
        </div>
    );
}


