import "./Projects.css"

const Projects = () => {
    return(
        <section class = "work title" id="sectionWork">
        <div class = "work-project">
            <h1 className="sectionTitle"> Projects </h1>
            <div class = "tamagotchi project" hidden>
                <h3>The Tamagotchi Project <a href="https://github.com/Bernard-Calma/tamagotchi-project" target="_blank"><img class = "github" src="./public/GitHub.png" alt="githubLogo" /></a></h3>
                <div class = "projectContainer">
                    <div class = "project-button left" onclick="openProjectsLeft()">
                        <img src="./public/left-button.png" alt="left-button" id="left-button"/>
                    </div>
                    <div class = "project-image">
                        <a href="https://bernard-calma.github.io/tamagotchi-project/" target="_blank" ><img src="./public/tamagotchi.png" alt="tamagotchi" id="imgTamagotchi" class="projectImage"/></a>
                    </div>      
                    <div class = "project-button right" onclick="openProjectsRight()"> 
                        <img src="./public/right-button.png" alt="right-button" id="right-button"/>
                    </div>
                </div>
                <h5>First mini project at General Assembly.<br/>Based on a 90's game called Tamagochi.</h5>
                <ul>Skills:
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                </ul>
            </div>

            <div class = "floating-shoe project" hidden>
                <h3>Floating Shoe <a href="https://github.com/Bernard-Calma/project-1" target="_blank"><img class = "github" src="./public/GitHub.png" alt="githubLogo" /></a></h3>
                <div class = "projectContainer">
                    <div class = "project-button left" onclick="openProjectsLeft()">
                        <img src="./public/left-button.png" alt="left-button" id="left-button"/>
                    </div>
                    <div class = "project-image">
                        <a href="https://bernard-calma.github.io/project-1/" target="_blank"><img src="./public/floating-shoe.png" alt="floating-shoe" id="floating-shoe" class="projectImage"/></a>
                    </div>      
                    <div class = "project-button right" onclick="openProjectsRight()">
                        <img src="./public/right-button.png" alt="right-button" id="right-button"/>
                    </div>
                </div>
                <h5>Floating Shoe is a game where you as a player will be a flying shoe and you need to avoid those feet that are trying to get into you as you move forward.</h5>
                <ul>Skills:
                    <li>Canvas</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                </ul>
            </div>

            <div class = "spentrace" hidden>
                <h3>Spentrace <a href="https://github.com/Bernard-Calma/Spentrace" target="_blank"><img class = "github" src="./public/GitHub.png" alt="githubLogo" /></a></h3>
                <div class = "projectContainer">
                    <div class = "project-button left" onclick="openProjectsLeft()">
                        <img src="./public/left-button.png" alt="left-button" id="left-button"/>
                    </div>
                    <div class = "project-image">
                        <a href="https://spentrace.herokuapp.com/" target="_blank"><img src="./public/Spentrace.png" alt="spentrace" id="spentrace" class="projectImage"/></a>
                    </div>      
                    <div class = "project-button right" onclick="openProjectsRight()">
                        <img src="./public/right-button.png" alt="right-button" id="right-button"/>
                    </div>
                </div>
                <h5>This app can be used for simple budgeting tool, you can enter your earnings and expenses or expected cash flow everyday and will give you your how much you owe, your available spending and how much you'll need until the next expense.</h5>
                <ul>Skills:
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>Express</li>
                    <li>NodeJS</li>
                    <li>MongoDB</li>
                    <li>EJS</li>
                </ul>
            </div>

            <div class = "streamin">
                <h3 className="projectName">Streamin <a href="https://github.com/Bernard-Calma/streamin-frontend" target="_blank"><i class="fa-brands fa-github github"></i></a></h3>
                <div class = "projectContainer">
                    <div class = "project-button left" onclick="openProjectsLeft()">
                        <img src="./public/left-button.png" alt="left-button" id="left-button"/>
                    </div>
                    <div class = "project-image">
                        <a href="https://stream-in.herokuapp.com/" target="_blank"><img src="images/projects/Streamin.png" alt="streamin" id="streamin" class="projectImage"/></a>
                    </div>      
                    <div class = "project-button right" onclick="openProjectsRight()">
                        <img src="./public/right-button.png" alt="right-button" id="right-button"/>
                    </div>
                </div>
                <h5>Streamin is a React-based social media app that allows users to post videos they find interesting with full CRUD capabilites. Meaning they can create, show, update, and delete the posts they make. All while being able to like the videos posted by themselves and other users, as well as comment on videos and like said comments.</h5>
                <ul>Skills:
                    <li>React</li>
                    <li>MongoDB</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>Express</li>
                    <li>NodeJS</li>  
                </ul>
            </div>
        </div>
    </section> 
    )
}

export default Projects