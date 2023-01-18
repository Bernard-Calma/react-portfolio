import { useState } from "react"

const School = (props) => {
    const [school, setSchool] = useState(props.school)
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
                <h4 className="technologiesTitle">Technologies</h4>
                <div className="technologies">
                    <div className="technologyContainer">
                        <img className = "logo" src="images/education/java.png" alt="java" /> 
                        <p className="technologyTitles">Java</p>
                    </div>
                    <div className="technologyContainer">
                        <img className = "logo smallLogo" src="images/education/eclipse.svg" alt="eclipse" />
                        <p className="technologyTitles">Eclipse IDE</p>
                    </div>
                    <div className="technologyContainer">
                        <img className = "logo smallLogo dataStructureLogo" src="images/education/logo-data-structure.png" alt="data structure and algorithm" />
                        <p className="technologyTitles">Data Structure and Algorithm</p>
                    </div>
                </div>
            </div>
        </div>
    </div>      
    )
}

export default School