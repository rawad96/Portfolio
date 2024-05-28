import { Card, Container, Button, Navbar, NavbarCollapse, NavbarBrand, Nav, NavLink, NavbarToggle, Dropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/CSS/Main.css'
import { useEffect, useState } from 'react'
import ProjectComp from './Components/ProjectComp'
import Skills from './Components/Skills'
import ContactMe from './Components/ContactMe'
import Footer from './Components/Footer'








const Portfolio = () => {

    const words = ['Full Stack Developer', 'Web Designer', 'Web Developer'];
    const [index, setIndex] = useState(0)
    const [displayedWord, setDisplayedWord] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    const [allSkills, setallSkills] = useState([{ name: "HTML5", power: "90%", color: "rgb(215, 107, 30)" }, { name: "Javascript", power: "90%", color: "rgb(213, 203, 21)" }, { name: "Css", power: "80%", color: "rgb(33, 81, 236)" }
        , { name: "React", power: "95%", color: "rgb(39, 175, 187)" }, { name: "Node", power: "90%", color: "rgb(30, 154, 26)" }, { name: "MongoDb", power: "85%", color: "rgb(37, 145, 78)" }, { name: "Bootstrap", power: "80%", color: "rgb(115, 61, 197)" }
        , { name: "Firebase", power: "70%", color: "rgb(199, 152, 52)" }, { name: "C", power: "60%", color: "rgb(70, 112, 210)" }, { name: "C++", power: "60%", color: "rgb(127, 159, 235)" }
        , { name: "Java", power: "50%", color: "rgb(210, 61, 78)" }, { name: "Python", power: "65%", color: "rgb(9, 218, 237)" }
    ])

    const [moveCard, setmoveCard] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setmoveCard(!moveCard)
        }, 1000)
    }, [moveCard])

    useEffect(() => {
        const typingInterval = 90; // Interval for typing (milliseconds)
        const deletingInterval = 10; // Interval for deleting (milliseconds)

        let timer;
        if (!isDeleting) {
            // Typing logic
            if (displayedWord === words[index]) {
                // Start deleting after 3 seconds
                timer = setTimeout(() => {
                    setIsDeleting(true);
                }, 2000);
            } else {
                // Otherwise, continue typing
                timer = setTimeout(() => {
                    setDisplayedWord((prevWord) => prevWord + words[index][prevWord.length]);
                }, typingInterval);
            }
        } else {
            // Deleting logic
            if (displayedWord.length > 0) {
                // Remove one character from displayedWord
                timer = setTimeout(() => {
                    setDisplayedWord((prevWord) => prevWord.slice(0, prevWord.length - 1));
                }, deletingInterval);
            } else {
                // After deleting all characters, move to the next word and start typing immediately
                setIndex((prevIndex) => (prevIndex + 1) % words.length);
                setIsDeleting(false);
            }
        }

        return () => clearTimeout(timer);
    }, [index, displayedWord, isDeleting]);


    const [navbarColor, setnavbarColor] = useState(false)
    const [aboutLink, setaboutLink] = useState(false)
    const [experinceLink, setexperinceLink] = useState(false)
    const [skillPower, setskillPower] = useState(false)
    const [skillsLink, setskillsLink] = useState(false)
    const [contactLink, setcontactLink] = useState(false)

    window.onscroll = () => {
        changeAboutColor()
        changeNavBarColor()
        changeSkillsPower()
        changeContactColor()
    }

    const changeAboutColor = () => {
        if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
            setaboutLink(true)
            setexperinceLink(false)

        }
        else {
            setaboutLink(false)

        }
    }

    const changeNavBarColor = () => {
        if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
            setnavbarColor(true)
            setaboutLink(false)
            setexperinceLink(true)
        }
        else {
            setnavbarColor(false)
        }
    }

    const changeSkillsPower = () => {
        if (document.body.scrollTop > 1600 || document.documentElement.scrollTop > 1600) {
            setskillPower(true)
            setskillsLink(true)
            setexperinceLink(false)
        }
        else {
            setskillPower(false)
            setskillsLink(false)

        }
    }

    const changeContactColor = () => {
        if (document.body.scrollTop > 2600 || document.documentElement.scrollTop > 2600) {
            setskillsLink(false)
            setcontactLink(true)
        }
        else {
            setcontactLink(false)

        }
        if (document.body.scrollTop > 2850 || document.documentElement.scrollTop > 2850) {
            setskillPower(false)
        }
    }

    const goUp = () => {
        window.scrollTo(0, 0)
    }

    return (
        <>

            <Navbar expand="lg" fixed='top' className={navbarColor ? "bg-dark" : ""} id='nav'>
                <Container>
                    <Navbar.Brand style={{ color: "whitesmoke" }}>RAWAD</Navbar.Brand>
                    <NavbarToggle type='button' aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                    </NavbarToggle>
                    <NavbarCollapse id='navbarResponsive'>
                        <Nav className='tex-uppercase ms-auto py-4 py-lg-0'>
                            <Nav.Item><NavLink style={{ color: "whitesmoke" }} onClick={goUp}>Home</NavLink></Nav.Item>
                            <Nav.Item><NavLink href='#about' style={{ color: aboutLink ? "black" : "whitesmoke" }}>About</NavLink></Nav.Item>
                            <Nav.Item><NavLink href='#projects' style={{ color: experinceLink ? "black" : "whitesmoke" }}>Experince</NavLink></Nav.Item>
                            <Nav.Item><NavLink className={skillsLink ? "skillslink-active" : 'skillslink'} href='#skills' style={{ color: "whitesmoke" }}>Skills</NavLink></Nav.Item>
                            <Nav.Item><NavLink style={{ color: contactLink ? "black" : "whitesmoke" }} href='#contact' >Contact</NavLink></Nav.Item>
                        </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>

            <header className='masthead' data-stellar-background-ratio="0.5" id='headerimg'>
                <Container>
                    <div className='profImagediv'></div>
                    <div className="masthead-subheading" >I'm</div>
                    <div className="masthead-heading text-uppercase">rawad bader</div>
                    <div className="masthead-subheading typer">{displayedWord}</div>
                </Container>
            </header>


            <section className='site-section py-5' id='about'>
                <Container>
                    <Card className='mt-5' style={{ border: "unset" }}>
                        <h1 className='text-center' style={{ color: "black" }}>About me</h1>
                        <Card className='py-2 about' style={{ border: "unset" }}>
                            Greetings,
                            <br />
                            Welcome to my digital realm, where lines of code converge to craft innovative solutions.
                            <br />
                            As a Full Stack Developer, I invite you to explore the synthesis of front-end elegance and back-end robustness showcased in my portfolio.
                            <br />
                            Each project reflects my commitment to excellence in the dynamic landscape of technology.
                            <br />
                            I hope you find inspiration and insight within these digital corridors.
                            <br />
                            Thank you for visiting, and may the code speak volumes about my passion for precision and innovation.
                        </Card>
                    </Card>
                </Container>
            </section>

            <section className='page-section bg-white py-5' id='projects'>
                <Container>
                    <ProjectComp />
                </Container>
            </section >

            <section className='page-section bg-light py-5' id='skills'>
                <Container>
                    <Card className='py-2 bg-transparent' style={{ border: "unset" }}>
                        <h2 className='text-center'>Skills</h2>
                        <Card className='mt-1 skills-card bg-transparent' style={{ border: "unset" }}>
                            {
                                allSkills?.map((s, index) => {
                                    return <Skills key={index} skill={s} skillspower={skillPower} />
                                })
                            }
                        </Card>
                    </Card>
                </Container>
            </section >

            <section className='page-section bg-light py-5' id='contact'>
                <Container>
                    <ContactMe />
                </Container>
            </section>

            <footer className='site-footer bg-dark text-white'>
                <Container>
                    <Footer />
                </Container>
            </footer>

            <Card className={moveCard ? "goUp-card goUp-card-move" : 'goUp-card'} onClick={goUp}>
                {/* <ArrowUp size={40} className='m-auto' color='gray' /> */}


                <svg className='m-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="35" height="35" color="#000000" fill="none">
                    <path d="M18 11.5C18 11.5 13.5811 5.50001 12 5.5C10.4188 5.49999 6 11.5 6 11.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M18 18.5C18 18.5 13.5811 12.5 12 12.5C10.4188 12.5 6 18.5 6 18.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </Card>
        </>
    )
}

export default Portfolio
