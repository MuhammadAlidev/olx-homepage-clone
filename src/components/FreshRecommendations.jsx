import React from 'react'
import Cards from './Card.jsx'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css'
import Rows from './Rows.jsx'

const FreshRecommendations = (props) => {
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
        <div className="customContainer2">
            <p className="topText">{props.topText}</p>
            <Row>
                {Rows.map(row)}
            </Row>
        </div>
    )
}

export default FreshRecommendations
