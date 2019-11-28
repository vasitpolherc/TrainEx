import React, { Component } from 'react'
import { login } from './UserFunctions'
import styled from 'styled-components';
import {Input} from 'reactstrap'

const Styles = styled.div`
  .topic{
    text-align:center;
    color:blue;
  }
  .form-control{
    font-size:20px;
  }


`;

class Login extends Component {
  constructor() {
    super()
    this.state = {
      StaffEmail: '',
      password: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const user = {
      StaffEmail: this.state.StaffEmail,
      password: this.state.password
    }

    login(user).then(res => {
      if (res) {
        this.props.history.push(`/profile`)
      }
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <Styles>
              <h1 className="topic">STAFF </h1>
              <div className="h4 form-group">
                <label htmlFor="email">Email address</label><br/>
                <Input 
                  type="email"
                  className="form-control"
                  name="StaffEmail"
                  placeholder="Enter Email"
                  value={this.state.StaffEmail}
                  onChange={this.onChange}
                />
              </div>
              <div className="h4 form-group">
                <label htmlFor="password">Password</label>
                <Input 
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Sign in
              </button>
              </Styles>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
