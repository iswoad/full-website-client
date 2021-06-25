import React from 'react';
import { Button } from 'react-bootstrap'
import Card from "react-bootstrap/Card";

const BookingCard = (props) => {
    const { bookedService } = props.bk;
    return (
        <div className = 'mx-2 my-2 col-md-3'>
            <Card style={{ width: '18rem' }}>
                <Card.Img style={{height: '200px'}} src={`data:image/png;base64,${bookedService.image.img}`} alt = "services" />
                <Card.Body>
                    <Card.Title>{bookedService.title}</Card.Title>
                    <Card.Text>
                        {bookedService.description}
                    </Card.Text>
                    <Button variant="success">Status: Done</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default BookingCard;