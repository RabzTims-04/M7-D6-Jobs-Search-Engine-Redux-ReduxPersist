import React from 'react'
import { Container, Row, Col, Navbar, Form, Button } from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import logo from "../../assets/logo192.png"
import { addPasswordAction, addUserNameAction } from '../../redux/actions/actions'
import "./Login.css"

const Login = ({history}) => {

   /*  const userLogin =() => {
        console.log(window.localStorage.getItem('userName'));
    } */

    const { userName, password } = useSelector(state => state)
    const dispatch = useDispatch()

    return (
        <>
        <style type="text/css">
            {`#home-navbar {display: none}`}
          </style>
          <Navbar id="login-nav" className="navbar-expand-lg navbar-light bg-light"  variant="dark">
            <Container>
            <Navbar.Brand>
                <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                />{' '}
            FutureJobs&copy;
            </Navbar.Brand>
            </Container>
        </Navbar>
        <Container fluid id="login-body">
          <Row>
              <Col  md={{span: 4, offset:4}} className="mt-5 pt-5 text-light">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>UserName</Form.Label>
                        <Form.Control 
                        value={userName}
                        onChange={(e)=> dispatch(addUserNameAction(e.target.value))}
                        type="text"
                        placeholder="Enter Username" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                        value={password} 
                        onChange={(e) => dispatch(addPasswordAction(e.target.value))}
                        type="password" 
                        placeholder="Password" />
                    </Form.Group>
                    <div className="text-center">
                        <Button  onClick={()=>history.push("/home")} className="login-btn pt-2" variant="success" type="button">
                            Login
                        </Button>
                    </div>
                </Form>

              </Col>
          </Row>
          
        </Container>

        </>
    )
}

export default withRouter(Login)
