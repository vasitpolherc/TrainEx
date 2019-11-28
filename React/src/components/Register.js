import React, { Component } from 'react'
import { register } from './UserFunctions'
import {Input} from 'reactstrap'

class Register extends Component {
  constructor() {
    super()
    this.state = {
      StaffFName: '',
      StaffLName: '',
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

    const newUser = {
      StaffFName: this.state.StaffFName,
      StaffLName: this.state.StaffLName,
      StaffEmail: this.state.StaffEmail,
      password: this.state.password
    }

    register(newUser).then(res => {
      this.props.history.push(`/login`)
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Register</h1>
              <div className="form-group">
                <label htmlFor="name">First name</label>
                <Input
                  type="text"
                  className="form-control"
                  name="StaffFName"
                  placeholder="Enter your Firstname"
                  value={this.state.StaffFName}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Last name</label>
                <Input
                  type="text"
                  className="form-control"
                  name="StaffLName"
                  placeholder="Enter your Lastname"
                  value={this.state.StaffLName}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="StaffEmail">StaffEmail address</label>
                <Input
                  type="StaffEmail"
                  className="form-control"
                  name="StaffEmail"
                  placeholder="Enter your Email"
                  value={this.state.StaffEmail}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Enter your Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Register!
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Register
