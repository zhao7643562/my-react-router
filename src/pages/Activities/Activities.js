import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import ActivitesNav from '../../Components/activitesnav/ActivitesNav'

import All from './all/All'
import Recommended from './recommended/Recommended'
import Pins from './pins/Pins'
import Articles from './articles/Articles'

import './activities.css'

class Activities extends Component{
  render(){
    return (
      <div className='activities'>
        <ActivitesNav></ActivitesNav>
        <div className='content'>
        <Switch>
             {/* <Route path="/activities" exact component={Recommended}></Route> */}
             <Route path='/activities/recommended' component={Recommended}></Route>
             <Route path='/activities/all' component={All}></Route>
             <Route path='/activities/articles' component={Articles}></Route>
            <Route path='/activities/pins' component={Pins}></Route>
             <Redirect to='/activities/recommended'></Redirect>

           </Switch>
        </div>
      </div>
    )
  }
}

export default Activities