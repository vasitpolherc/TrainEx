import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import Train from './Train.png';
import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Typical from 'react-typical'

const Styles = styled.div`
  .navbar {
    background-color: white;
  }

  a, .navbar-brand, .navbar-nav .nav-link {
    color: #1875d2;
    size:50px;

    &:hover {
      color: black;
    }
  }
  .type{
    color:#1080ff;
    font-size: 20px;
    font-family: "Comic Sans MS", cursive, sans-serif;
    text-align: center;
    margin-top:20px;
  }

`;


class NavigationBar extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }

  render() {
    const loginRegLink = (
  
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
      </ul>
    )

    const userLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </a>
        </li>
      </ul>
   
    )

    return (
      <nav className="navbar navbar-expand-lg  bg-white ">
      <Styles>
      <Navbar expand="lg">
      <Navbar.Brand 
       className="logo" ><img
        alt="trainex"
        src={Train} 
        width="200"
        height="60"/>
      </Navbar.Brand>
        <h1 className='type'>
      <Typical 
        steps={['New Experience🚆' , 1000,'New Experience🚆 with Thai Express Train',500]}
        loop={Infinity}
        wrapper="p"
      /></h1>
      </Navbar>
      </Styles>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbars10"
          aria-controls="navbars10"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse flex-row-reverse"
          id="navbars10"
        >
          <ul className="navbar-nav">
          </ul>
          {localStorage.usertoken ? userLink : loginRegLink}
        </div>
      </nav>
    )
  }
}

export default withRouter(NavigationBar)
