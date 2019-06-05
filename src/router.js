import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home'
import Details from './Components/Details'
import Login from './Components/Login/Login'
import HowItWorks from './Components/HowItWorks'
import About from './Components/About'
import Donate from './Components/Donate'


export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/login' component={Login}/>
        <Route path='/details' component={Details}/>
        <Route path='/howitworks' component={HowItWorks} />
        <Route path='/about' component={About} />
        <Route path='/donate' component={Donate} />
        
    </Switch>
)