import School from "../components/School"

const Education = (props) => {
    return(
        <div className="education">
            {props.schools.map((school, index) => 
                <School 
                    school = {school}
                    index = {index}
                    key = {index}   
                />
            )}
        </div>
    )
}

export default Education