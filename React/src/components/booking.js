import React, { Component } from 'react'
import {Table,Container,Row,Col } from 'react-bootstrap';
import styled from 'styled-components';
import {Tonkla} from './Tonkla';



const Styles = styled.div`
  .bTable{
    background-color:white;
  }
  .mt{
    font-size:20px;
  }
`;

export default class booking  extends Component{
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
<Container>
  <Row>
    <Col className="bTable">
        <p className="mt">Train Route</p>
        <Table responsive>
  <thead>
    <tr>
      <th>Booking ID</th>
      <th>Date</th>
      <th>From-To</th>
      <th>Passenger</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
  {this.state.users.map(users =>
    <tr key={users.UserID}>
      <td>BK5973{users.UserID}</td>
      <td>30 January 202{users.UserID}</td>
      <td>Bangkok - Pattaya</td>
      <td>{users.username}</td>
      <td>
        <a href="" onClick={() => this.deleteMember(users)}>❌Delete</a></td>
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

