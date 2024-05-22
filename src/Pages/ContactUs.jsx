import React, { useRef, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import submitGif from '../assets/react.svg'

const ContactUs= ()=> {
    const name = useRef();
    const phoneNo = useRef();
    const query = useRef();
    const [submitted , setSubmitted] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();

        const obj = {
            username : name.current.value,
            userPhone : phoneNo.current.value,
            problem : query.current.value,
        }

        console.log(obj)

        name.current.value = '';
        phoneNo.current.value = '';
        query.current.value = '';

        setSubmitted(!submitted);
        
    }


    return <>
        <Container>

            {submitted && <img src={submitGif}></img>}

            <section>
                <Form style={{margin: '10px'}} onSubmit={submitHandler}>
                    <Form.Label htmlFor="name">Your Name:</Form.Label>
                    <input style={{width: '100%'}} ref={name} type="text" id="name"/> <br/>
                    <Form.Label htmlFor="number">Your Phone-number:</Form.Label>
                    <input style={{width: '100%'}} ref={phoneNo} type="text" id="number"/> <br/>
                    <Form.Label htmlFor="problem">Your query:</Form.Label>
                    <textarea style={{width: '100%'}} ref={query} rows={5} id="problem"/> <br/>
                    <Button type="submit">Submit</Button>
                </Form>
            </section>
        </Container>
    </>

}

export default ContactUs;