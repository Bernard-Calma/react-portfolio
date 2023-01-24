import { useState } from "react"
import Technologies from "../containers/Technologies"
import EducationProject from "./EducationProject"
import "./School.css"

const School = (props) => {
    const [school] = useState(props.school)
    const [technologies] = useState(school.technologies)
    console.log("props.index", props.index%2)
    return(
        <div className = "asu school">
            <div className={props.index%2 === 0? "schoolContainerUpper": "schoolContainerUpperReverse"}>
                <a href={school.schoolWebsite} target="_blank" rel="noreferrer">
                    <img 
                        className = {props.index === 0? "asuSchoolLogo schoolLogo": "schoolLogo"}
                        src={school.image} 
                        alt="asuLogo"
                    />
                </a>
                <div className= {props.index%2 === 0? "schoolDescription rigthTextAlign": "schoolDescription"} >
                    <h3 className="schoolName">{school.name}</h3>
                    <h4 className="course">{`${school.course}(${school.degree})`}</h4>
                    <p className = "yearGraduated">{school.yearGraduate}</p>
                    <p className = "courseDescription">{school.description}</p>
                    {
                        school.projects && <EducationProject projects = {school.projects} />
                    }
                </div>
            </div>
            {
                school.technologies && <Technologies technologies = {technologies} />
            }
            <hr/>
        </div>      
    )
}

export default School