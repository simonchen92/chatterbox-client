import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './component/Home/Home'
import Chat from './component/Chat/Chat'

const App = () => (
    <Router>
        <Route path="/" exact component={Home} />
        <Route path="/chat" component={Chat} />
    </Router>
)

export default App