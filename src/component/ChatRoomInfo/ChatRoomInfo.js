import React from 'react'

// Styling
import { makeStyles } from '@material-ui/core/styles'
import onlineIcon from '../../Icons/onlineIcon.png'
import ChatIcon from '@material-ui/icons/Chat';
import GroupIcon from '@material-ui/icons/Group'

const useStyles = makeStyles(() => ({
    root: {
        fontSize: '1rem',
        padding: '1rem',
        width: '14vw',
        overflowY: 'scroll',
        overflowWrap: 'break-word',
        background: 'rgba(255, 255, 255, 0.5)'
    },
    roomName: {
        display: 'flex',
    },
    onlineUsers: {
        display: 'flex'
    },
    icon: {
        paddingRight: '2px'
    },
    user: {
        margin: '5px 0',
    },
    image: {
        padding: '2px'
    }
}))

const ChatRoomInfo = ({ room, users }) => {
    const classes = useStyles()

    return (
    <div className={classes.root}>
        <div className='roomName'>
            <h3 className={classes.roomName}><ChatIcon className={classes.icon} />Room Name:</h3>
            <h4>{room}</h4>
        </div>
        <div className={classes.users}>
        { 
            users 
            ? (
                <div className='onlineContainer'>
                    <h3 className={classes.onlineUsers}><GroupIcon className={classes.icon} /> Online Users:</h3>
                    <div className='activeUsers'>
                        <h4>
                            {users.map(({ name }) => (
                                <div key={name} className={classes.user} >
                                    {name}
                                <img className={classes.image} src={onlineIcon} alt='online' />
                                </div>
                            ))}
                        </h4>
                    </div>
                </div>
            ) 
            : null
        }
        </div>
    </div>
    )
}

export default ChatRoomInfo