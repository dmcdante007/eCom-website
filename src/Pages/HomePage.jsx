import React from "react";
import { Button, Container, ListGroup } from "react-bootstrap";
import { IoPlayCircleOutline } from "react-icons/io5";

const HomePage = ()=> {

    return <>
        
            <header style={{backgroundColor: 'skyblue'}}>
                <h1 style={{textAlign: 'center', fontSize: '90px'}}>The Generics</h1>
                <Button style={{display: 'flex', margin: 'auto'}} varient='primary'><h2>Get our Lates Album</h2></Button>
                <a><IoPlayCircleOutline style={{display: 'flex', margin: 'auto'}} size={100}/></a>
            </header>
            <Container>
            <body style={{marginTop: '50px'}}>
                <h2 style={{textAlign: 'center'}}>TOURS</h2>
                <ListGroup>
                    <ListGroup.Item>JUL16 DETROIT, MI DTE ENERGY MUSIC THEATRE <Button>BUY Tickets</Button></ListGroup.Item>
                    <ListGroup.Item>JUL16 DETROIT, MI DTE ENERGY MUSIC THEATRE <Button>BUY Tickets</Button></ListGroup.Item>
                    <ListGroup.Item>JUL16 DETROIT, MI DTE ENERGY MUSIC THEATRE <Button>BUY Tickets</Button></ListGroup.Item>
                    <ListGroup.Item>JUL16 DETROIT, MI DTE ENERGY MUSIC THEATRE <Button>BUY Tickets</Button></ListGroup.Item>
                    <ListGroup.Item>JUL16 DETROIT, MI DTE ENERGY MUSIC THEATRE <Button>BUY Tickets</Button></ListGroup.Item>
                    <ListGroup.Item>JUL16 DETROIT, MI DTE ENERGY MUSIC THEATRE <Button>BUY Tickets</Button></ListGroup.Item>
                </ListGroup>
            </body>
            </Container>
            <footer style={{backgroundColor: 'skyblue'}}>
                <h1 style={{textAlign: 'center', fontSize: '60px', color: 'white'}}> The Generics </h1>
            </footer>
        
    </>
}

export default HomePage;