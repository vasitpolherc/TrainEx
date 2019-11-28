import * as React from 'react'
import {Redirect} from 'react-router-dom'
import styled from 'styled-components'


const Styles = styled.div`
    .re{
    color:blue;
    font-size:30px;
    text-align:center
    }

`;



export default class DelayedRedirect extends React.Component {
    state = {
        redirect: false,
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                redirect: true,
            })
        }, 5000)
    }

    render() {
        if (this.state.redirect) {
            return (
                <Redirect to={'./member'} />
            )
        }

        return (

            <div >
                <Styles>
                <h1 className='re'>Redirecting to dashboard in 5 seconds...</h1>
                </Styles>
            </div>
    
        )
    }
}