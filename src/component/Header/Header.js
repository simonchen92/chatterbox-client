import React from 'react'

// Styling
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    root: {
        display: 'grid',
        gridColumn: '1/3',
        alignItems: 'start',
        // borderBottom: '1px solid black'
    },
    header: {
        gridColumn: '1',
        margin: '1rem',
    },
    button: {
        gridColumn: '2',
        backgroundColor: '#ffb2b2',
        margin: '1rem',
        textTransform: 'none',
        textAlign: 'center',
        width: '30%',
        justifySelf: 'end'
    }
}))

const Header = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <h1 className={classes.header}>Chatter Box</h1>
            <Button
            className={classes.button}
            size='small'
            variant='contained'
            type='submit'
            onClick={event => window.location.href='/'}>
            Leave Room
            </Button>
        </div>
    )
}

export default Header