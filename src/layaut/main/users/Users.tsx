import React from 'react';
import {UserType} from "../../../redux/UsersReducer";
import {Button} from "../../../components/Button";
import styles from "./Users.module.css"
import userPhoto from './../../../assets/images/585e4beacb11b227491c3399.png'
import {NavLink} from "react-router-dom";
import {Paginator} from "../../../components/Paginator";

type UserPropsType = {
    users: UserType[]
    followTC: (userId: number) => void
    unfollowTC: (userId: number) => void
    onClickHandler: (p: number) => void
    totalCount: number
    pageSize: number
    currentPage: number
    blocked: Array<number>
}

export function Users(props: UserPropsType) {
    const {users, blocked, totalCount, pageSize, currentPage, followTC, unfollowTC, onClickHandler} = props

    let portionSize = 10

    return (
        <div className={styles.box}>
            <Paginator totalCount={totalCount}
                       pageSize={pageSize}
                       currentPage={currentPage}
                       portionSize={portionSize}
                       onClickHandler={onClickHandler}
            />
            {users.map(u =>
                <div key={u.id} className={styles.box_item}>
                        <span className={styles.item_follow}>
                            <NavLink to={'./profile/' + u.id}>
                                 <img src={u.photos.small != null ? u.photos.small : userPhoto} alt={u.name} className={styles.avatar}/>
                            </NavLink>
                            {u.followed ?
                                <Button name={'follow'}
                                        disabled={props.blocked.some(id => id === u.id)}
                                        onClick={()=> unfollowTC(u.id)}
                                        key={u.id}></Button> :
                                <Button name={'unfollow'}
                                        disabled={blocked.some(id => id === u.id)}
                                        onClick={()=> followTC(u.id)}
                                        key={u.id}></Button>}

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


