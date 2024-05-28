import { useState } from "react"
import { Button, Card, Form, FormGroup } from "react-bootstrap"
import emailjs from '@emailjs/browser'


const ContactMe = () => {

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [phone, setphone] = useState("")
    const [comment, setcomment] = useState("")

    const sendEmail = (e) => {
        e.preventDefault()

        const templateParams = {
            from_name: name,
            from_email: email,
            phone: phone,
            message: comment,
        }


        const serviceId = "service_qpkdbu9"
        const templateId = "template_syabo8e"
        const publicKey = "rdr3gSY0Aqg5TiHuC"

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
            })
            .catch((error) => {
                alert('Email sending error!')
            })
    }

    return (
        <>
            <Card style={{ border: "unset" }} className="bg-transparent my-5">
                <h2 className="text-center mb-2">Contact Me</h2>
                <Card.Text className="text-center text-muted">contact any time</Card.Text>
                <Card className="m-auto ps-4 contact-card">
                    <Form className='mt-3 me-4' onSubmit={sendEmail}>
                        <FormGroup>
                            <Form.Label className="mt-5 f-lable" >Full Name:</Form.Label>
                            <Form.Control type="text" required className="control" onChange={e => setname(e.target.value)} />
                            <Form.Label className='mt-5 f-lable' >Email:</Form.Label>
                            <Form.Control type="text" required className="control" onChange={e => setemail(e.target.value)} />
                            <Form.Label className='mt-5 f-lable' >Phone:</Form.Label>
                            <Form.Control type="number" required className="control" onChange={e => setphone(e.target.value)} />
                            <Form.Label className='mt-5 f-lable'>Comment:</Form.Label>
                            <Form.Control as="textarea" required className="control" onChange={e => setcomment(e.target.value)} />
                            <div className="text-center">
                                <Button type="submit" className='mt-5 mb-4 bg-dark border-dark w-50'>Submit</Button>
                            </div>
                        </FormGroup>
                    </Form>
                    <span className="text-center"><span className="text-muted">You may also email me at</span> Rawad3001@gmail.com</span>
                </Card>
            </Card>
        </>
    )
}

export default ContactMe
