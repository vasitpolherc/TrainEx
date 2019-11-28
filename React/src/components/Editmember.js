import React, {Component} from 'react';
import Modal from 'react-modal';
import {Form,Button,Table,Container,Row,Col} from 'react-bootstrap'
import styled from 'styled-components';

const Styles = styled.div`
  .mTable{
    background-color:white;
    margin: 5px;
  }
  .ml{
    font-size:25px;

  }

`;

export default class Users extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            modalIsOpen: false,
            Username: '',
            UserEmail: '',
            msg: '',
            id: 0
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.logChange = this.logChange.bind(this); // We capture the value and change state as user changes the value here.
        this.handleEdit = this.handleEdit.bind(this); // Function where we submit data
    }

    openModal(member) {
        this.setState({
            modalIsOpen: true,
            Username: member.Username,
            UserEmail: member.UserEmail,
            UserID: member.UserID
        });
    }

    closeModal() {
        this.setState({
            modalIsOpen: false
        });
    }

    logChange(e) {
        this.setState({
            [e.target.Username]: e.target.value //setting value edited by the admin in state.
        });
    }

    handleEdit(event) {
        //Edit functionality
        event.preventDefault()
        var data = {
            Username: this.state.Username,
            UserEmail: this.state.UserEmail,
            UserID: this.state.UserID
        }
        fetch("/users/edit", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data) {
            console.log(data)
            if (data === "success") {
                this.setState({
                    msg: "User has been edited."
                });
            }
        }).catch(function(err) {
            console.log(err)
        });
    }

    componentDidMount() {
        let self = this;
        fetch('/users', {
            method: 'GET'
        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data) {
            self.setState({
                users: data
            });
        }).catch(err => {
            console.log('caught it!', err);
        })
    }

    render() {
        return ( 
            <React.Fragment>
            <Styles>
            <Container>
            <Row className="mTable">
              <Col>
              <p className="ml">Member of TrainEX</p>
            <Table responsive>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th >Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map(member =>
                            <tr key={member.UserID}>
                                <td>{member.username} </td>
                                <td>{member.UserEmail}</td>
                                <td>{member.UserFName}</td>
                                <td>{member.UserLName}</td>
                                <td><Button onClick={() => this.openModal(member)}>🔧Edit</Button ></td>
                            </tr>
                        )}
                        <Modal
                            isOpen={this.state.modalIsOpen}
                            onRequestClose={this.closeModal}
                            contentLabel="Example Modal" >
                        <Form onSubmit={this.handleEdit} method="POST">
                            <label>Name</label>
                            <input onChange={this.logChange} className="form-control" value={this.state.username} placeholder='Username' name='name' validations={['required']}/>
                            <label>Email</label>
                            <input onChange={this.logChange} className="form-control" value={this.state.UserEmail} placeholder='email@email.com' name='email' validations={['required', 'email']}/>
                            <label>First Name</label>
                            <input onChange={this.logChange} className="form-control" value={this.state.UserFName} placeholder='First Name' name='fn' validations={['required']}/>
                            <label>Last Name</label>
                            <input onChange={this.logChange} className="form-control" value={this.state.UserLName} placeholder='Last Name' name='ln' validations={['required']}/>
                            <div className="submit-section">
                            <Button href="./member" className="btn btn-uth-submit">Submit</Button>
                            </div>
                        </Form>
                        </Modal>
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