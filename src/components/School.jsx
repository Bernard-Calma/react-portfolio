const School = (props) => {
    return(
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
    )
}

export default School