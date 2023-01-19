import "./EducationProject.css"

const EducationProject = (props) =>
    <div className="educationProjects">
        <h4 className="projects">Projects</h4>
        <ul className="educationProjects">
            {props.projects.map((project, index) => 
                <li 
                    className="educationProjects" 
                    key = {index}
                >{project}</li>
            )}
        </ul>
    </div>

export default EducationProject