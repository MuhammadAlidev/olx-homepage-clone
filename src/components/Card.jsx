import React from 'react';
import Card from 'react-bootstrap/Card';
import '../App.css'

const Cards = (props) => {
    const card ={
        width: '18rem',
        marginBottom: "12%"
    }
    const txtStyle = {
        color: 'grey', 
        fontSize: '12px'
    }
    return (
        <Card style={card} className="customCard">
            <Card.Img variant="top" src={props.imgSrc} />
            <Card.Body>
                <Card.Title>{props.cardTitle}</Card.Title>
                <Card.Text style={txtStyle}>{props.cardTxt}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Cards