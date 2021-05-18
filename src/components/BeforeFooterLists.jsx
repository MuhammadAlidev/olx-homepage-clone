import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css'

const BeforeFooterLists = () => {
    return (
        <Row className="footerRow">
            <Col>
                <ul className="footerLi">
                    <li><h5>POPULAR CATEGORIES</h5></li>
                    <li>Cars</li>
                    <li>Flats for rent</li>
                    <li>Jobs</li>
                    <li>Mobile Phones</li>
                </ul>
            </Col>
            <Col>
                <ul className="footerLi">
                    <li><h5>TRENDING SEARCHES</h5></li>
                    <li>Bikes</li>
                    <li>Watches</li>
                    <li>Books</li>
                    <li>Dogs</li>
                </ul>
            </Col>
            <Col>
                <ul className="footerLi">
                    <li><h5>ABOUT US</h5></li>
                    <li>About OLX Group</li>
                    <li>OLX Blog</li>
                    <li>OLX For Business</li>
                    <li>Conatact Us</li>
                </ul>
            </Col>
            <Col>
                <ul className="footerLi">
                    <li><h5>OLX</h5></li>
                    <li>Help</li>
                    <li>Sitemap</li>
                    <li>Legal & Privacy information</li>
                </ul>
            </Col>
            <Col>
                <ul className="footerLi">
                    <li><h5>FOLLOW US</h5></li>
                </ul>
            </Col>
        </Row>
    )
}

export default BeforeFooterLists