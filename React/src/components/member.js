import React, { Component } from 'react';
import { setVisibilityFilter, setMembers } from '../actions'
import {Table,Container,Row,Col} from 'react-bootstrap'
import {Tonkla} from '../components/Tonkla'
import { connect } from 'react-redux'
import styled from 'styled-components';
import Modal from 'react-modal';



const Styles = styled.div`
  .mTable{
    background-color:white;
    margin: 5px;
  }
  .ml{
    font-size:25px;

  }

`;

export default class member extends Component {
  constructor(props) {
      super(props)
      // console.log(props)
      this.state = {
        users: []
    }
      this.logChange = this.logChange.bind(this);
  }
  componentDidMount() {
    let self = this;
    fetch('/users')
      .then(res => res.json())
      .then(users => self.setState({ users: users }));
      
  }
  
  logChange(e) {
        this.setState({[e.target.name]: e.target.value});  
    }
  
    deleteMember(users){
      var data = {
        UserID: users.UserID
      }
      fetch("/users/delete", {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data)
      }).then(function(response) {
          if (response.status >= 400) {
            throw new Error("Bad response from server");
          }
          return response.json();
      }).then(function(data) {
          if(data === "success"){
             this.setState({msg: "User has been deleted."});  
          }
      }).catch(function(err) {
          console.log(err)
      });
  }
  render() {
    return (
      <React.Fragment>
      <Tonkla/>
      <Styles>
      <br/><br/>
      <Container>
        <Row className="mTable">
          <Col>
          <p className="ml">Member of TrainEX</p>
        <Table responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th >Action</th>
          </tr>
        </thead>
        <tbody>
        {this.state.users.map(users =>
        <tr key={users.UserID}>
            <td>TEX{users.UserID}</td>
            <td>{users.username}</td>
            <td>{users.UserEmail}</td>
            <td>{users.UserFName}</td>
            <td>{users.UserLName}</td>
            <td>
               <a href="./Editmember">🔧Edit
              </a>&ensp;&ensp;
              <a href="" onClick={() => this.deleteMember(users)}>❌Delete</a>
            </td>
          </tr>
          )}
          
        </tbody>
      </Table>
          </Col>
        </Row>
      </Container>
      </Styles>
      </React.Fragment>
    );
  }
}

