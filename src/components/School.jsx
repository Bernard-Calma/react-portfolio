import { useState } from "react"
import Technologies from "../containers/Technologies"
import EducationProject from "./EducationProject"

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
                    : <EducationProject
                        projects = {school.projects}
                    />
                }
                
            </div>
        </div>
    </div>      
    )
}

export default School