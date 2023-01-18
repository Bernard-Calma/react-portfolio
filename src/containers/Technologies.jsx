const Technologies = () => {
    return(
        <div>
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
    )
}

export default Technologies