import React, {Component} from "react"

//Style
import "./Header.css"

export default class Headers extends Component {
    render(){
        return(
            <div className = "divHeaders">
                <img alt="Logo"/>
                <ul className = "ulNavigation">
                    <li>Home</li>
                    <li>Experience</li>
                    <li>Resume</li>
                    <li>Projects</li>
                    <li>Contacts</li>
                </ul>
            </div>
        )
    }
}