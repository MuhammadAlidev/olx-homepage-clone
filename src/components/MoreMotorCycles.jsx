import React from 'react';
import '../App.css';
import Cards from './Card.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FreshRow from './FreshRow.jsx'
import '../App.css';

const MoreMotorCycles = (props) => {
    const row = (value) => {
        return (
            <Col>
                <Cards
                    key={value.key}
                    imgSrc={value.imgSrc}
                    cardTitle={value.cardTitle}
                    cardTxt={value.cardTxt}
                />
            </Col>
        )
    }
    return (
        <div className="customContainer">
            <p className="topText">{props.topText}</p>
            <Row>
                {FreshRow.map(row)}
            </Row>
        </div>
    )
}

export default MoreMotorCycles;