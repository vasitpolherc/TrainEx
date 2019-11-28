import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import  { Redirect,Switch } from 'react-router-dom' 
import DelayedRedirect from '../DelayedRedirect'
import styled from 'styled-components'


const Styles = styled.div`
  .pro{
    text-align:center;
    font-size:40px;
  }
  .to{
    font-size:30px;
  }
  .to2{
    color:#1080ff;
    font-size:30px;
  }

`;


class Profile extends Component {
  constructor() {
    super()
    this.state = {
      StaffFName: '',
      StaffLName: '',
      StaffEmail: '',
      errors: {}
    }
  }
  

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      StaffFName: decoded.StaffFName,
      StaffLName: decoded.StaffLName,
      StaffEmail: decoded.StaffEmail
    })
  }
  

  render() {
    return (
      <div className="container">
        <Styles>
          <div className="col-md-12 mx-auto "><br/><br/>
            <h1 className="pro">PROFILE</h1> <br/><br/>
          </div>
          <table className="table col-lg-6 mx-auto">
            <tbody>
              <tr>
                <td className='to'>Fist Name:</td>
                <td className='to2'>{this.state.StaffFName}</td>
              </tr>
              <tr>
                <td className='to'>Last Name:</td>
                <td className='to2'>{this.state.StaffLName}</td>
              </tr>
              <tr>
                <td className='to'>Email:</td>
                <td className='to2'>{this.state.StaffEmail}</td>
              </tr>
            </tbody>
          </table>
          <br/><br/>
          <DelayedRedirect/>
          </Styles>
      </div>
    )
  }
}

export default Profile
