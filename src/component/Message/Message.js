import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    root: {
        display: 'grid',
        alignItems: 'center',
        gridTemplateRows: '1/2',
        gridTemplateColumns: '2/3',
        padding: '.5rem',
    },
    message: {
        borderRadius: '5px',
        padding: '.5em',
        wordBreak: 'break-all',
        backgroundColor: '#e8efe2',
    },
    text: {
        marginTop: '0',
        marginBottom: '.5em'
    },
    time: {
        color: '#b2b2b2',
    },
    userText: {
        fontWeight: 'bold'
    },
    userTimeStamp: {
        display: 'flex',
        '& p': {
            marginTop: '.5em',
            paddingRight: '.5em',
        },
    },
}))

const Message = ({ message: { user, text, time }, name }) => {
    const classes = useStyles()

    let isCurrentUser = false

    if(user === name) {
        isCurrentUser = true
    }

    return (
        isCurrentUser
        ? (
            <div className={classes.root}>
                <div className={classes.message}>
                    <div className={classes.userTimeStamp}>
                        <p className={classes.userText}>{name}</p>
                        <p className={classes.time}>{time}</p>
                    </div>
                    <p className={classes.text}>{text}</p>
                </div>
            </div>
        )
        : (
            <div className={classes.root}>
                <div className={classes.message}>
                    <div className={classes.userTimeStamp}>
                        <p className={classes.userText}>{user}</p>
                        <p className={classes.time}>{time}</p>
                    </div>
                    <p className={classes.text}>{text}</p>
                </div>
            </div>
        )
    )
}

export default Message
