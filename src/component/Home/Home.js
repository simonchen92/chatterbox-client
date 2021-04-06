import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import { Paper, FormControl, TextField, Button } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10rem auto',
        padding: theme.spacing(5),
        height: '50vh',
        width: '50vh',
        backgroundColor: '#ededed'
      },
    input: {
        margin: '1rem'
    },
    button: {
        margin: '1rem',
        textTransform: 'none',
        backgroundColor: '#81d8d0',
        color: 'white',
        '&:hover': {
            backgroundColor: '#d89581'
        }
    },
    }))

const Join = () => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    const classes = useStyles()

    return (
        <div className='joinChatroomContainer'>
            <Paper className={classes.root} elevation={3}>
                <h1 className='heading'>Chatter Box</h1>
                <FormControl className={classes.input}>
                <TextField 
                    variant='outlined' 
                    label='Name' 
                    type='text' 
                    onChange={(event) => setName(event.target.value)} 
                    />
                </FormControl>
                <FormControl className={classes.input}>
                <TextField 
                    variant='outlined' 
                    label='Room'  
                    type='text' 
                    onChange={(event) => setRoom(event.target.value)} 
                    />
                </FormControl>
                <Button 
                    className={classes.button} 
                    size='small' 
                    variant='contained' 
                    type='submit' 
                    component={Link} 
                    to={`/chat?name=${name}&room=${room}`}
                    onClick={event => (!name || !room) ? event.preventDefault() : null}> 
                    Join Chatroom
                </Button>
            </Paper>
        </div>
    )
}

export default Join
