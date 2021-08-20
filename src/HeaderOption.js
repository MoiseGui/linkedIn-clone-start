import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import "./HeaderOption.css"

function HeaderOption({ avatar, Icon, title, onClick }) {
    const user = useSelector(selectUser)
    return (
        <div className='headerOption' onClick={onClick}>
            {Icon && <Icon className='headerOption__icon' />}
            {avatar && user && <Avatar className="headerOption__icon" src={user.photoUrl}>{user.email[0]}</Avatar>}
            {avatar && !user && <Avatar className="headerOption__icon"/>}
            <h3 className='headerOption_title'>{title}</h3>
        </div>
    )
}

export default HeaderOption
