import React, {Component} from 'react'
import {Navbar, Container, Nav, Form, FormControl} from "react-bootstrap";
import logo from './logo.png'
import {Switch,BrowserRouter as Router, Route} from "react-router-dom";
import Saved from "../Pages/Saved";
import Map from "../Pages/Map";


export default class Header extends Component {
    render() {
        return(
            <>
            <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container >
                    <Navbar.Brand href="/">
                        <img
                        src = {logo}
                        height="30"
                        width="30"
                        className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls = "responsive-navbar-nav"/>
                    <Navbar.Collapse className = "items" id ="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link style= {{marginLeft: "20px", marginRight: "70px"}} href="/"> Карта </Nav.Link>
                            <Nav.Link href="/about"> Сохраненные точки </Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl
                                type="text"
                                plaseholder = "Search"
                                className="mr-sm-2"
                                placeholder="Введите адрес"
                                />
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Map}/>
                        <Route exact path="/about" component={Saved}/>
                    </Switch>
                </Router>
        </>
        )
    }
}