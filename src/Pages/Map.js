import React, {Component} from 'react'
import Container from "react-bootstrap/Container";
import Tab from "react-bootstrap/esm/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";
import Nav from "react-bootstrap/Nav";


export default class Map extends Component {
    render() {
        return(
            <div style={{marginTop:"100px", border:"none"}}>
                <Container>
                    <Tab.Container id="left-tabs-example" defaultActiveKey='one'>
                    <Row>
                        <Col style={{marginRight: "0px"}} sm={2}>
                            <Nav  className="flex-column">
                                {/*по этим значениям будет происходить сортировка точек на карте*/}

                                <div className="nav">
                                    <div className="nav-item">
                                        <div className={`nav-link property`}>
                                            Бумага
                                        </div>
                                    </div>
                                    <div className="nav-item">
                                        <div className={`nav-link property`} >
                                            Стекло
                                        </div>
                                    </div>
                                    <div className="nav-item">
                                        <div className={`nav-link property`}>
                                            Пластик
                                        </div>
                                    </div>
                                    <div className="nav-item">
                                        <div className={`nav-link property`}>
                                            Одежда
                                        </div>
                                    </div>
                                    <div className="nav-item">
                                        <div className={`nav-link property`}>
                                            Металл
                                        </div>
                                    </div>
                                    <div className="nav-item">
                                        <div className={`nav-link property`}>
                                            Опасные&nbsp;отходы
                                        </div>
                                    </div>
                                    <div className="nav-item">
                                        <div className={`nav-link property`}>
                                            Батарейки
                                        </div>
                                    </div>
                                    <div className="nav-item">
                                        <div className={`nav-link property`}>
                                            Лампочки
                                        </div>
                                    </div>
                                    <div className="nav-item">
                                        <div className={`nav-link property`}>
                                            Бытовая&nbsp;техника
                                        </div>
                                    </div>
                                </div>
                            </Nav>
                        </Col>
                        <Col sm ={10}>
                            <div>точки, принимающие .. </div>
                        </Col>
                    </Row>
                    </Tab.Container>
                </Container>
            </div>
        )
    }
}