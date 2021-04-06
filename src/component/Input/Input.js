import React from 'react'

// Styling
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles(theme => ({
    form: {
        display: 'grid',
        justifyContent: 'center',
        gridColumn: '1/3',
        // borderTop: '1px solid black',
        padding: '1rem 1rem',
    },
    sendMessage: {
        width: '50vw',
        fontSize: '1rem',
        padding: '.5rem',
        marginRight: '1px',
        boxShadow: '1px 1px 1px 1px rgba(0,0,0,0.2)'
    },
    button: {
        gridColumn: '2',
        backgroundColor: '#86b3d1',
        fontSize: '1rem',
        margin: '1px'
    }
}))

const Input = ({ message, setMessage, sendMessage }) => {
    const classes = useStyles()

    return (
        <form className={classes.form}>
            <input
                className={classes.sendMessage}
                type='text'
                placeholder='Enter Message'
                value={message}
                onChange={event => setMessage(event.target.value)}
                onKeyDown={event => event.key === 'Enter' ? sendMessage(event) : null}
            />
            <Button 
                className={classes.button} 
                variant='contained'
                size='small'
                endIcon={<SendIcon />}
                onClick={event => sendMessage(event)}>
                Send
            </Button>
        </form>
    )
}

export default Input