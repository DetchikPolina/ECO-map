import React, {Component} from 'react'
import Container from "react-bootstrap/Container";
import Tab from "react-bootstrap/esm/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";
import Nav from "react-bootstrap/Nav";
import MyGoogleMapComponent  from "../card";
import * as recycleData from "../data/recycle";

class Map extends Component {
    updateType = (type) => {
        this.setState({
            type: 'ALL' // значение по умолчанию
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
                                            <div className={`nav-link`} onClick={() => {
                                                this.props.updateType("PAPER"); // если клинули на бумагу, то тип - бумага
                                            }}>
                                                Бумага
                                            </div>
                                        </div>
                                        <div className="nav-item">
                                            <div className={`nav-link`} onClick={() => {
                                                this.type = "GLASS";
                                            }}>
                                                Стекло
                                            </div>
                                        </div>
                                        <div className="nav-item">
                                            <div className={`nav-link`} onClick={() => {
                                                this.type = "PLASTIC";
                                            }}>
                                                Пластик
                                            </div>
                                        </div>
                                        <div className="nav-item">
                                            <div className={`nav-link`} onClick={() => {
                                                this.type = "CLOTHES";
                                            }}>
                                                Одежда
                                            </div>
                                        </div>
                                        <div className="nav-item">
                                            <div className={`nav-link`} onClick={() => {
                                                this.type = "METAL";
                                            }}>
                                                Металл
                                            </div>
                                        </div>
                                        <div className="nav-item">
                                            <div className={`nav-link`} onClick={() => {
                                                this.type = "DANGEROUS";
                                            }}>
                                                Опасные&nbsp;отходы
                                            </div>
                                        </div>
                                        <div className="nav-item">
                                            <div className={`nav-link`} onClick={() => {
                                                this.type = "BATTERIES";
                                            }}>
                                                Батарейки
                                            </div>
                                        </div>
                                        <div className="nav-item">
                                            <div className={`nav-link`} onClick={() => {
                                                this.type = "BULBS";
                                            }}>
                                                Лампочки
                                            </div>
                                        </div>
                                        <div className="nav-item">
                                            <div className={`nav-link`} onClick={() => {
                                                this.type = "APPLIANCES";
                                            }}>
                                                Бытовая&nbsp;техника
                                            </div>
                                        </div>
                                    </div>
                                </Nav>
                            </Col>
                            <Col sm={8}>
                                <MyGoogleMapComponent

                                    type={this.type}

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