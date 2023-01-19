import { useState } from "react"
import School from "../components/School"
import Schools from "../modules/Schools"

const Education = () => {
    const [schools, setSchools] = useState(Schools)
    return(
        <div className="education">
            {schools.map((school, index) => 
                <School 
                    school = {school}
                    index = {index}
                    key = {index}   
                />
            )}
            <div className = "sti school">
                    <a href="https://www.sti.edu/" target="_blank"  rel="noreferrer"><img className = "schoolLogo" src="images/education/STI.png" alt="stiLogo"/></a>
                    <div className="schoolDescription">
                        <h3 className="schoolName">STI College Bacoor</h3>
                        <h4 className="course">Computer Technology (AS)</h4>
                        <p className = "yearGraduated">(Graduated: 2009)</p>
                        <p className = "courseDescription">- Studied various programming methodologies, computer networks and concepts, basic computation, and data processing.</p>
                        <div className = 'educationProjects'>
                            <h4 className="course">Projects</h4>
                            <ul className="educationProjects">
                                <li className="educationProjects">Social Media website - Java, NetBeans</li>
                                <li className="educationProjects">Hotel Room and Reservation System - VB.net, Microsoft Access</li>
                                <li className="educationProjects">Powering a Radio using a Solar Panel - Arduino</li>
                            </ul>
                        </div>
                    </div>
            </div> 
        </div>
    )
}

export default Education