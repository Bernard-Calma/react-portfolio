const EducationProject = (props) =>
    <>
        <h4 className="course">Projects</h4>
        <ul className="educationProjects">
            {props.projects.map((project, index) => 
                <li className="educationProjects generalAssembly" key = {index}>{project}</li>
            )}
        </ul>
    </>

export default EducationProject