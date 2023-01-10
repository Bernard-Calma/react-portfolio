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

        <div id="carouselExampleCaptions" class="carousel slide relative" data-bs-ride="carousel">
  <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div class="carousel-inner relative w-full overflow-hidden">
    <div class="carousel-item active relative float-left w-full">
      <img
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
        class="block w-full"
        alt="..."
      />
      <div class="carousel-caption hidden md:block absolute text-center">
        <h5 class="text-xl">First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item relative float-left w-full">
      <img
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
        class="block w-full"
        alt="..."
      />
      <div class="carousel-caption hidden md:block absolute text-center">
        <h5 class="text-xl">Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item relative float-left w-full">
      <img
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
        class="block w-full"
        alt="..."
      />
      <div class="carousel-caption hidden md:block absolute text-center">
        <h5 class="text-xl">Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </section> 
    )
}

export default Projects