import "./EducationProject.css"

const EducationProject = (props) =>
    <>
        <h4 className="projects rightTextAlign">Projects</h4>
        <ul className="educationProjects">
            {props.projects.map((project, index) => 
                <li className="educationProjects rightTextAlign" key = {index}>{project}</li>
            )}
        </ul>
    </>

export default EducationProject