import React from 'react';
import {Button,Container,Row,Col} from 'react-bootstrap';
import styled from 'styled-components';



const Styles = styled.div`
  .col1{
    color:white;
    background-color:green;
    margin: 10px;
    text-align:center;
    padding:20px 40px 20px 40px;
    font-size:25px;
    text-decoration: none;
    width:100%;
    
  }
  .col2{
    color:white;
    background-color:orange;
    margin:10px;
    text-align:center;
    padding:20px 40px 20px 40px;
    font-size:25px;
    text-decoration: none;
    width:100%;
  }
  .col3{
    color:white;
    background-color:red;
    margin:10px;
    text-align:center;
    padding:20px 40px 20px 40px;
    font-size:25px;
    text-decoration: none;
    width:100%;
  }
  .col4{
    color:white;
    background-color:blue;
    margin:10px;
    text-align:center;
    padding:20px 40px 20px 40px;
    font-size:25px;
    text-decoration: none;
    width:100%;
  }
  .col5{
    color:white;
    background-color:#33cccc;
    margin:10px;
    text-align:center;
    padding:20px 40px 20px 40px;
    font-size:25px;
    text-decoration: none;
    width:100%;
  }
  .dash{
    color:darkblue;
  }
`;


export const Tonkla = () => ( 
<React.Fragment>
<Styles>
<Container>
  <br/>
<h1 className='dash'>Dashboard</h1><br/>
  <Row>
    <Col><Button variant="outline-success" className= "col1" href="/member">👨‍👩‍👧‍👦Members</Button></Col>
    <Col><Button variant="outline-warning" className= "col2" href="/statistics">📊Statistics</Button></Col>
    <Col><Button variant="outline-Danger" className= "col3" href="/report">📄Report</Button></Col>
    <Col><Button variant="outline-primary" className= "col4" href="/booking">✅Management</Button></Col>
    <Col><Button variant="outline-info" className= "col5" href="/Map">🗺Route</Button></Col>
  </Row>
  <br/>
</Container>
</Styles>
</React.Fragment>
)
