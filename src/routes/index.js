import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Home from '../Containers/Home'
import Main from '../Containers/Main'
import Welcome from '../Containers/Welcome/index.jsx'

const Routes =  () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={Welcome} path="/welcome" exact />
            <Route component={Main} path="/main" exact />
        </BrowserRouter>
    )
}

export default Routes