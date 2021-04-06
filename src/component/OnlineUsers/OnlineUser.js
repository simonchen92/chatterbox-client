import React from 'react'

import onlineIcon from '../../Icons/onlineIcon.png'

const OnlineUser = ({ users }) => (
    <div className='onlineUsers'>
    { 
        users 
        ? (
            <div className='onlineContainer'>
                <h3>Users Online:</h3>
                <div className='activeUsers'>
                    <h4>
                        {users.map(({name}) => (
                            <div key={name} className='activeUser'>
                            {name}
                            <img src={onlineIcon} alt='online' />
                            </div>
                        ))}
                    </h4>
                </div>
            </div>
        )
        : null
    }
    </div>
)

export default OnlineUser