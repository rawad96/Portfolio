import { Container, Card, Col, Row } from 'react-bootstrap'
import { Instagram, TwitterX, Facebook } from 'react-bootstrap-icons'


const Footer = () => {
    return (
        <>
            <Card className='text-light bg-transparent ' style={{ border: "unset", height: "300px" }}>
                <h1 className='m-auto footer-text'>Developed by RAWAD BADER</h1>
            </Card>
        </>
    )
}

export default Footer
