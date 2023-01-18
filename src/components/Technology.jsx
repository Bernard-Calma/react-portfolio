import { useState } from "react"
import "./Technology.css"

const Technology = (props) => {
    const [technology, setTechnology] = useState(props.technology)
    return(
        <div className="technologyContainer">
            <img 
                className = {props.index === 0
                    ? "logo"
                    : props.index === 1 ?  "logo smallLogo"
                    : "dataStructureLogo"} 
                src={technology.logo} 
                alt={technology.title} 
            /> 
            "logo smallLogo dataStructureLogo"
            <p className="technologyTitles">{technology.title}</p>
        </div>
    )
}

export default Technology