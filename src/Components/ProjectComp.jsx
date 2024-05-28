import { useState } from "react"
import { Button, Card, Container } from "react-bootstrap"


const ProjectComp = () => {

    const [description, setdescription] = useState("")

    return (
        <>
            <Card style={{ border: "unset" }} className='mt-4'>
                <h2 className='text-center'>Profisional Experince</h2>
                <Card className='flex-row justify-content-center py-3' style={{ border: "unset" }}>
                    <Card className='project-card1'>
                        <span className='text-center title'>Cinema Management</span>
                        <span className="text-white project-readmore" onClick={() => setdescription("cinema")}>Read more</span>
                    </Card>
                    <Card className='project-card2 ms-2 me-2'>
                        <span className='text-center title'>Real-Time Chat</span>
                        <span className="text-white project-readmore" onClick={() => setdescription("Chat")}>Read more</span>
                    </Card>
                    <Card className='project-card3'>
                        <span className='text-center title'>High-Tech Placement Website</span>
                        <span className="text-white project-readmore" onClick={() => setdescription("Placement")}>Read more</span>
                    </Card>
                </Card>
            </Card>

            <Card className=" px-4 py-4" style={{ display: description === "cinema" ? "block" : "none" }}>
                <h4 className="text-center mb-3">Cinema Management</h4>
                <h6 >Full Stack Development</h6>
                A web application that integrates the development of two REST API servers alongside a React.js client.
                <br />
                <strong>Server:</strong>
                <div className="px-3">
                    The servers has been developed employing Node.js and Express.js. Communication between these servers is facilitated through the execution of (CRUD) operations. These servers are responsible for the management of databases, which were implemented using MongoDB. To ensure a structured and efficient interaction with the MongoDB database, object modeling was accomplished through the use of Mongoose. Additionally, the security of the application's routers was fortified by the utilization of (JWT).
                </div>
                <strong>Client:</strong>
                <div className="px-3">
                    Developed using React.js and Redux, the design is implemented using CSS and bootstrap.
                </div>
                <span><strong>Skills:</strong> Javascript, React.js, Node.js, Html, Css, Bootstrap, MongoDb</span>
                <div className="text-center mt-3">
                    <Button className="bg-dark border-dark" onClick={() => setdescription("")}>Close</Button>
                </div>
            </Card>
            <Card className=" px-4 py-4" style={{ display: description === "Chat" ? "block" : "none" }}>
                <h4 className="text-center mb-3">Real-Time Chat</h4>
                <h6 >Full Stack Development</h6>
                A real-time messaging system, enabling users to exchange messages, create groups, and manage user blocking.
                <br />
                <strong>Server:</strong>
                <br />
                <div className="px-3">
                    The server has been implemented using Node.js and Express.js. The communication between users facilitated seamlessly through WebSocket. This server plays a pivotal role in managing the system's databases, which have been constructed using MongoDB. To ensure a structured and efficient interaction with the MongoDB database, object modeling has been achieved through the utilization of Mongoose. The security of the application's routers was fortified by the utilization of (JWT).
                </div>
                <strong>Client:</strong>
                <br />
                <div className="px-3">
                    The application is developed using React.js. The "UseWebSocket" library is used for connecting, sending and receiving messages. The user interface design and styling was achieved using CSS combined with Bootstrap.
                </div>
                <span><strong>Skills:</strong> Javascript, React.js, Node.js, Html, Css, Bootstrap, MongoDb, UseWebSocket.</span>
                <div className="text-center mt-3">
                    <Button className="bg-dark border-dark" onClick={() => setdescription("")}>Close</Button>
                </div>
            </Card>
            <Card className=" px-4 py-4 description-card" style={{ display: description === "Placement" ? "block" : "none" }}>
                <Container>
                    <h4 className="text-center mb-3">High-Tech Placement Website</h4>
                    <h6 >Full Stack Development</h6>
                    An advanced placement platform designed to meet the needs of both job seekers and organizations seeking to advertise employment opportunities. This sophisticated system enables smooth job posting and search functionality, efficient resume submission processes and comprehensive access to informative articles and guides on diverse topics. In addition, chat with service representatives. This innovative platform offers a holistic approach to the hiring process, ensuring a sophisticated and efficient experience for all users.
                    <br />
                    <strong>Server:</strong>
                    <div className="px-3">
                        Servers: This system has two servers developed using node.js and express, employing CRUD operations for inter-server communication. The servers effectively manage a MongoDB database executed using Mongoose. On one of the servers a WebSocket is used for the purpose of implementing a chat. The security of the application's routers was fortified by the utilization of (JWT).
                    </div>
                    <strong>Client:</strong>
                    <div className="px-3">
                        Client: The application is developed using React.js. The "UseWebSocket" library is used for connecting, sending and receiving messages. The user interface design and styling was achieved using CSS combined with Bootstrap
                    </div>
                    <span><strong>Skills:</strong> Javascript, React.js, Node.js, Html, Css, Bootstrap, MongoDb</span>
                    <div className="text-center mt-3">
                        <Button className="bg-dark border-dark" onClick={() => setdescription("")}>Close</Button>
                    </div>
                </Container>
            </Card>
        </>
    )
}

export default ProjectComp
