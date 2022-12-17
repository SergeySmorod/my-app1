import React from "react";
import styles from './users.module.css'
let Users =(props)=>{
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'data:image/jpeg;base64,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',
                followed: false,
                fullName: 'Dmitry',
                status: 'I am a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://asiapoisk.com/uploads/cache/people/Xiao%20Xu-465x600.JPG',
                followed: true,
                fullName: 'Sasha',
                status: 'I am a boss',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://asiapoisk.com/uploads/cache/people/Xiao%20Xu-465x600.JPG',
                followed: false,
                fullName: 'Andrew',
                status: 'I am a boss',
                location: {city: 'Kiev', country: 'Ukraine'}
            }

        ]
        )
    }
    return <div>
        {
            props.users.map(u=><div key={u.id}>
                <span>
                    <div>
                    <img src={u.photoUrl} className={styles.userPhoto}/>
                </div>

                    <div>
                        {u.followed ?
                            <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick={()=>{props.follow(u.id)}}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div><div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}
export default Users;