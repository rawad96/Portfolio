import { Card } from "react-bootstrap"





const Skills = ({ skill, skillspower }) => {


    return (
        <>
            <Card className='p-2 bg-transparent' style={{ border: "unset" }}>
                <Card className="flex-row bg-transparent" style={{ border: "unset" }}>
                    <span>{skill.name}:</span>
                    <span className="ms-auto">{skill.power}</span>
                </Card>
                <Card className='flex-row align-items-center bg-transparent' style={{ border: "unset" }}>
                    <div className='pipe'>
                        <div className={skillspower ? 'skillpower-active' : 'skillpower'} style={{ backgroundColor: `${skill.color}`, width: `${skill.power}` }}></div>
                    </div>
                </Card>
            </Card>
        </>
    )
}

export default Skills
