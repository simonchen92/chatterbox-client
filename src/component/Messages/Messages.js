import React, { useEffect, useRef } from 'react'
// import ScrollToBottom from 'react-scroll-to-bottom'

import Message from '../Message/Message'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    root: {
        overflowY: 'scroll',
        background: 'white'
    }
}))

const Messages = ({ messages, name }) => {
    const classes = useStyles()
    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  
    useEffect(()=> scrollToBottom(), [messages]);
    


    return (
        <div className={classes.root}>
            {messages.map((message, index) => <div key={index}><Message message={message} name={name} /></div>)}
            <div ref={messagesEndRef} />
        </div>
    )
}

export default Messages