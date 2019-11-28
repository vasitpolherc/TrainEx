import React, { Component } from 'react';
import styled from 'styled-components';
import {Container,Row,Col,Table } from 'react-bootstrap';
import {Tonkla} from './Tonkla';



const Styles = styled.div`
  .rTable{
    background-color:white;
    margin: 50px;
  }
  .dTable{
    background-color:white;
    margin: 5px;
  }
  .mt{
    font-size:20px;
  }
  .ml{
    font-size:15px;
  }
  .td{
    font-size:20px;
  }
`;
export default class report extends Component {
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
  fetch('/users/report')
    .then(res => res.json())
    .then(users => self.setState({ users: users }));
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

logChange(e) {
  this.setState({[e.target.name]: e.target.value});  
}
render() {
  return (
<React.Fragment>
<Tonkla/>
<Styles>
<br/><br/>
<Container>
    <Row>
    <Col className="dTable">
      <p className="td">Train Detail</p>
  <Table responsive>
  <thead>
    <tr>
      <th>TrainNo</th>
      <th>Origin</th>
      <th>Destination</th>
      <th>SeatType</th>
      <th>Avaliable</th>
      <th>Price</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
  {this.state.users.map(users =>
    <tr  key={users.UserID}>
      <td>1{users.UserID}</td>
      <td>Bangkok</td>
      <td>Hua Hin</td>
      <td>First Class</td>
      <td>1{users.UserID} Seats</td>
      <td>1300</td>
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
