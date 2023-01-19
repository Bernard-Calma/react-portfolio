import { useState } from "react"
import Technologies from "../containers/Technologies"

const School = (props) => {
    const [school, setSchool] = useState(props.school)
    const [technologies, setTechnologies] = useState(school.technologies)
    return(
        <div className = "asu school">
        <a href={school.schoolWebsite} target="_blank" rel="noreferrer">
            <img 
                className = {props.index === 0? "asuSchoolLogo": ""}
                src={school.image} 
                alt="asuLogo"
            />
        </a>
        <div className="schoolDescription">
            <h3 className="schoolName">{school.name}</h3>
            <h4 className="course">{`${school.course}(${school.degree})`}</h4>
            <p className = "yearGraduated">{school.yearGraduate}</p>
            <p className = "courseDescription">{school.description}</p>
            <div className = 'educationProjects'>
                {
                    props.index === 0
                    ? <Technologies 
                        technologies = {technologies}
                    />
                    :
                    <div className = 'educationProjects'>
                        <h4 className="course">Projects</h4>
                        <ul className="educationProjects">
                            <li className="educationProjects generalAssembly">Streamin (Social Media Platform like)- React, Mongodb, Express, NodeJS, HTML, CSS, Javascript</li>
                            <li className="educationProjects generalAssembly">Spentrace (Butgeting App) - EJS, MongoDB, Express, NodeJS, HTML, CSS, Javascript</li>
                            <li className="educationProjects generalAssembly">Floating Shoe Game - JavaScript, HTML Canvas, CSS</li>
                            <li className="educationProjects generalAssembly">Tamagotchi Game - JavaScript, HTML, CSS</li>
                        </ul>
                    </div>
                }
                
            </div>
        </div>
    </div>      
    )
}

export default School