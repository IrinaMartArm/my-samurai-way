import React from 'react';
import {UserType} from "../../../redux/UsersReducer";
import {Button} from "../../../components/Button";
import styles from "./Users.module.css"


type UserPropsType = {
    users: UserType[]
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UserType[]) => void
}

export function Users(props: UserPropsType) {
    const {users, follow, unfollow} = props
    return (
        <div className={styles.box}>
            {users.map(u =>
                <div key={u.id} className={styles.box_item}>
                    <span className={styles.item_follow}>
                        <img src={u.avatar} alt={''} className={styles.avatar}/>
                        {u.followed ? <Button name={'follow'} onClick={()=>unfollow(u.id)} key={u.id}></Button> :
                            <Button name={'unfollow'} onClick={()=>follow(u.id)} key={u.id}></Button>}

                    </span>
                    <div className={styles.item_info}>
                        <span className={styles.item_name}>
                            <span>{u.fullName}</span>
                            <span>{u.status}</span>
                        </span>
                        <span >
                            <span>{u.location.country}</span>
                            <span>{u.location.city}</span>
                        </span>
                    </div>
                </div>)}
        </div>
    );
}


