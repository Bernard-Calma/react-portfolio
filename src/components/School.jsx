import { useState } from "react"
import Technologies from "../containers/Technologies"
import EducationProject from "./EducationProject"
import "./School.css"

const School = (props) => {
    const [school, setSchool] = useState(props.school)
    const [technologies, setTechnologies] = useState(school.technologies)
    return(
        <div className = "asu school">
            <div className="schoolContainerUpper">
                <a href={school.schoolWebsite} target="_blank" rel="noreferrer">
                    <img 
                        className = {props.index === 0? "asuSchoolLogo schoolLogo": ""}
                        src={school.image} 
                        alt="asuLogo"
                    />
                </a>
                <div className= {props.index%2 !== 0? "schoolDescription rigthTextAlign": "schoolDescription"} >
                    <h3 className="schoolName">{school.name}</h3>
                    <h4 className="course">{`${school.course}(${school.degree})`}</h4>
                    <p className = "yearGraduated">{school.yearGraduate}</p>
                    <p className = "courseDescription">{school.description}</p>
                </div>

            </div>
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
            <hr/>
        </div>      
    )
}

export default School