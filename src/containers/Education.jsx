import { useState } from "react"
import Schools from "../modules/Schools"

const Education = () => {
    const [schools, setSchools] = useState(Schools)
    return(
        <div className="education">
            <div className = "asu school">
                    <a href="https://engineering.asu.edu/" target="_blank"  rel="noreferrer"><img className = "asuSchoolLogo" src="images/education/ASU.png" alt="asuLogo"/></a>
                    <div className="schoolDescription">
                        <h3 className="schoolName"> Arizona State University</h3>
                        <h4 className="course">Software Engineering (BS)</h4>
                        <p className = "yearGraduated">(Expected Graduation: 2026)</p>
                        <p className = "courseDescription">- Software systems are complex, often including in excess of a million lines of code. Graduates of the BS in software engineering possess knowledge and skills of a defined engineering approach to complex systems analysis, planning, design and construction. The program has a unique, project-driven curriculum, establishing a new model of communication, teamwork, critical thinking and professionalism.</p>
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
            <hr/>
            <div className = "generalAssembly school">
                <div className="schoolTitle">
                    <a href="https://generalassemb.ly/" target="_blank"  rel="noreferrer"><img className = "gaSchoolLogo" src="images/education/GA.png" alt="gaLogo"/></a>
                    <div className="schoolDescription">
                        <h3 className="schoolName gaSchoolName"> General Assembly </h3>
                        <h4 className="course">Software Engineering Immersive (Certificate)</h4>
                        <p className = "yearGraduated">(Graduated: 2022)</p>
                        <p className = "courseDescription">- Software engineering immersive student in an intensive, twelve-week, 450+ hour program focused on product development fundamentals, object-oriented programming, MVC frameworks, data modeling, and team collaboration strategies. Developing a portfolio of individual and group projects.</p>
                        <div className = 'educationProjects'>
                            <h4 className="course">Projects</h4>
                            <ul className="educationProjects">
                                <li className="educationProjects generalAssembly">Streamin (Social Media Platform like)- React, Mongodb, Express, NodeJS, HTML, CSS, Javascript</li>
                                <li className="educationProjects generalAssembly">Spentrace (Butgeting App) - EJS, MongoDB, Express, NodeJS, HTML, CSS, Javascript</li>
                                <li className="educationProjects generalAssembly">Floating Shoe Game - JavaScript, HTML Canvas, CSS</li>
                                <li className="educationProjects generalAssembly">Tamagotchi Game - JavaScript, HTML, CSS</li>
                            </ul>
                        </div>
                    </div> 
                </div>
            </div>
            <hr/>
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
            <hr />
        </div>
    )
}

export default Education