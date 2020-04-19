import React, {Component} from 'react'
import Container from "react-bootstrap/Container";
import Tab from "react-bootstrap/esm/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";
import Nav from "react-bootstrap/Nav";
import MyGoogleMapComponent  from "../card";

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'ALL',
            cord: props.cord,
            address: props.address,
        };
    };

    updateType = (type) => {
        this.setState({
            type: type || 'ALL', // значение по умолчанию
        })
    };

    render() {
        return (
            <div style={{marginTop: "100px", border: "none"}}>
                <Container>
                    <Tab.Container id="left-tabs-example" defaultActiveKey='one'>
                        <Row>
                            <Col style={{marginRight: "0px"}} sm={2}>
                                <Nav className="flex-column">

                                    <div className="nav">
                                        <div className="nav-item">
                                            <div
                                                className={`nav-link property ${this.state.type === "PAPER" ? "active" : ""}`}
                                                onClick={() => {
                                                    this.updateType("PAPER"); // если клинули на бумагу, то тип - бумага
                                                }}>
                                                Бумага
                                            </div>
                                        </div>
                                        <div className="nav-item">
                                            <div
                                                className={`nav-link property ${this.state.type === "GLASS" ? "active" : ""}`}
                                                onClick={() => {
                                                    this.updateType("GLASS");
                                                }}>
                                                Стекло
                                            </div>
                                        </div>
                                        <div className="nav-item">
                                            <div
                                                className={`nav-link property ${this.state.type === "PLASTIC" ? "active" : ""}`}
                                                onClick={() => {
                                                    this.updateType("PLASTIC");
                                                }}>
                                                Пластик
                                            </div>
                                        </div>
                                        <div className="nav-item">
                                            <div
                                                className={`nav-link property ${this.state.type === "CLOTHES" ? "active" : ""}`}
                                                onClick={() => {
                                                    this.updateType("CLOTHES");
                                                }}>
                                                Одежда
                                            </div>
                                        </div>
                                        <div className="nav-item">
                                            <div
                                                className={`nav-link property ${this.state.type === "METAL" ? "active" : ""}`}
                                                onClick={() => {
                                                    this.updateType("METAL");
                                                }}>
                                                Металл
                                            </div>
                                        </div>
                                        <div className="nav-item">
                                            <div
                                                className={`nav-link property ${this.state.type === "DANGEROUS" ? "active" : ""}`}
                                                onClick={() => {
                                                    this.updateType("DANGEROUS");
                                                }}>
                                                Опасные&nbsp;отходы
                                            </div>
                                        </div>
                                        <div className="nav-item">
                                            <div
                                                className={`nav-link property ${this.state.type === "BATTERIES" ? "active" : ""}`}
                                                onClick={() => {
                                                    this.updateType("BATTERIES");
                                                }}>
                                                Батарейки
                                            </div>
                                        </div>
                                        <div className="nav-item">
                                            <div
                                                className={`nav-link property ${this.state.type === "BULBS" ? "active" : ""}`}
                                                onClick={() => {
                                                    this.updateType("BULBS");
                                                }}>
                                                Лампочки
                                            </div>
                                        </div>
                                        <div className="nav-item">
                                            <div
                                                className={`nav-link property ${this.state.type === "APPLIANCES" ? "active" : ""}`}
                                                onClick={() => {
                                                    this.updateType("APPLIANCES");
                                                }}>
                                                Бытовая&nbsp;техника
                                            </div>
                                        </div>
                                    </div>
                                </Nav>
                            </Col>
                            <Col sm={8}>
                                <MyGoogleMapComponent
                                    type={this.state.type}

                                    cord={this.state.cord}

                                    address={this.state.address}

                                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBW2Li7ZGekVpZOqsNJc53OKMm_xFrxcHw`}

                                    loadingElement={
                                        <div style={{height: '100%'}}/>
                                    }
                                    containerElement={
                                        <div style={{height: '500px', width: '800px'}}/>
                                    }
                                    mapElement={
                                        <div style={{height: '100%'}}/>
                                    }

                                />

                            </Col>
                            <Col sm={2}>
                                <div></div>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Container>
            </div>
        )
    }
}

export default Map;