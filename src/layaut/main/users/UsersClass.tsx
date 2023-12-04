import React from 'react';
import {UserType} from "../../../redux/UsersReducer";
import {Button} from "../../../components/Button";
import styles from "./Users.module.css"
import axios from "axios";
import userPhoto from './../../../assets/images/585e4beacb11b227491c3399.png'


// type UserPropsType = {
//     users: UserType[]
//     follow: (userId: string) => void
//     unfollow: (userId: string) => void
//     setUsers: (users: UserType[]) => void
// }

export class UsersClass extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((res)=> {this.props.setUsers(res.data.items)})
    }
    onClickHandler = (p: number)=> {
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then((res) =>
                    {this.props.setUsers(res.data.items)
                    this.props.setTotalCount(res.data.totalCount)}
            )

    }

    render () {
        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize)
        let pages = []
        for(let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div className={styles.box}>
                <div className={styles.pages}>
                    {pages.map(p => {return <span key={p}
                                                  className={this.props.currentPage === p ? styles.selected : styles.page}
                                                  onClick={()=>{this.onClickHandler(p)}}
                    >{p}</span>})}
                </div>
                {this.props.users.map(u =>
                    <div key={u.id} className={styles.box_item}>
                        <span className={styles.item_follow}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt={''} className={styles.avatar}/>
                            {u.followed ? <Button name={'follow'} onClick={()=>this.props.unfollow(u.id)} key={u.id}></Button> :
                                <Button name={'unfollow'} onClick={()=>this.props.follow(u.id)} key={u.id}></Button>}

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
}


