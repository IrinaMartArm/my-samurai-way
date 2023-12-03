import React from 'react';
import {UserType} from "../../../redux/UsersReducer";
import {Button} from "../../../components/Button";
import styles from "./Users.module.css"
import axios from "axios";
import userPhoto from './../../../assets/images/585e4beacb11b227491c3399.png'


type UserPropsType = {
    users: UserType[]
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UserType[]) => void
}

export function Users(props: UserPropsType) {
    const {users, follow, unfollow, setUsers} = props

    const getUsers = () => {
        if(users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then((res)=> {setUsers(res.data.items)})
        }
    }

    return (
        <div className={styles.box}>
            <button onClick={getUsers}>get users</button>
            {users.map(u =>
                <div key={u.id} className={styles.box_item}>
                    <span className={styles.item_follow}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt={''} className={styles.avatar}/>
                        {u.followed ? <Button name={'follow'} onClick={()=>unfollow(u.id)} key={u.id}></Button> :
                            <Button name={'unfollow'} onClick={()=>follow(u.id)} key={u.id}></Button>}

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


