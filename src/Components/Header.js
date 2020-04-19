import React, {Component} from 'react'
import {Navbar, Container, Nav, Form, FormControl} from "react-bootstrap";
import logo from './logo.png'
import {Switch,BrowserRouter as Router, Route} from "react-router-dom";
import Saved from "../Pages/Saved";
import Map from "../Pages/Map";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cord: "default cord",
            address: "default address"
        };
        // alert("Header's constructor called");
    };

    updateState = (cord, address) => {
        // пробовала передавать в setState объект, объект и callback, функцию. Ничего не работает, состояние не меняется
        this.setState((state, props) => ({
            cord: cord,
            address: address,
        }));
        // alert("Header's updateState called, cord=" + this.state.cord + ", address=" + this.state.address);
    };

    render() {
        let address = "";
        // alert("Header's render called");
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
                            <input
                                type="text"
                                className="mr-sm-2"
                                placeholder="Введите адрес"
                                onChange={event =>{
                                    address = event.target.value
                                }}
                                onKeyPress={e => {
                                    if (e.key === 'Enter') {
                                        let xhr = new XMLHttpRequest();
                                        let API_KEY = 'AIzaSyBW2Li7ZGekVpZOqsNJc53OKMm_xFrxcHw';
                                        let URL = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address.replace(/ /g, '+') + '&key=' + API_KEY;
                                        xhr.open('GET', URL, false);
                                        xhr.send();
                                        let resp = null;
                                        if (xhr.status !== 200) {
                                            alert( xhr.status + ': ' + xhr.statusText );
                                        } else {
                                            resp = JSON.parse(xhr.responseText);

                                            // !!!!!!! не происходит обновления this.state.
                                            this.updateState(
                                                [resp.results[0].geometry.location.lat, resp.results[0].geometry.location.lng],
                                                resp.results[0].formatted_address
                                            );
                                            // для явного вызова render() без обновления страницы
                                            this.forceUpdate();
                                        }
                                        // запретить обновление страницы
                                        e.preventDefault();
                                    }
                                }}
                            />
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
                <Router>
                    <Switch>
                        <Route path="/"  render={() => <Map cord={this.state.cord} address={this.state.address}/>}  />
                        <Route exact path="/about" component={Saved}/>
                    </Switch>
                </Router>
        </>
        )
    }
}
export default Header;
