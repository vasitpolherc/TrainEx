import React, { Component } from 'react'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'

import  NavigationBar  from './components/NavigationBar'
import report  from './components/report'
import member from './components/member'
import Editmember from './components/Editmember'
import statistics  from './components/statistics'
import  booking  from './components/booking'
import { Layout } from './components/Layout'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Map from './components/Map'
import styled from 'styled-components'


const Styles = styled.div`
  background-color:whitesmoke;
  padding-bottom:60vh;
`;

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Styles >
         <Router>
          <NavigationBar/>
          <Layout>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/report" component={report} />
              <Route path="/member" component={member} />
              <Route path="/booking" component={booking} />
              <Route path="/statistics" component={statistics} />
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/profile" component={Profile} />
              <Route path="/Editmember" component={Editmember} />
              <Route path="/Map" component={Map} />
            </Switch>
          </Layout>
        </Router>
      </Styles >
      </React.Fragment>
    )
  }
}

export default App
