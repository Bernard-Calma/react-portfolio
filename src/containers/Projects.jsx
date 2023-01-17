import "./Projects.css"
import WebsiteProjects from "../projects/WebsiteProjects"
import { useState } from "react"

const Projects = () => {
    const [projects, setProjects] = useState(WebsiteProjects)
    return(
      <section class = "work title" id="sectionWork">
        <h2 className="sectionTitle">Projects</h2>
        <div id="carouselExampleCaptions" className="carousel slide relative" >
          <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
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
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div className="carousel-inner relative w-full overflow-hidden">
              {/* TO DO: .map doesn't work research this on how to do iterate array */}
            <div className="carousel-item active relative float-left w-full" key={0}>
              <img
                src={projects[0].screenshot}
                className="projectImage block w-full"
                alt="Streamin Screenshot"
              />
              <div className="projectSummary carousel-caption hidden md:block absolute text-center">
                <a class="websiteLink" href={projects[0].websiteLink} target="_blank"><h5 className=" text-xl sectionSubTitle">{projects[0].name}</h5></a>
                <div className="projectDescription">
                  <div>
                    <p>{projects[0].summary}</p>
                    Skills:
                    <ul class="skillsList">
                      {projects[0].skills.map((skill, index) => <li className="projectSkills" key={index}>{skill}</li>)}
                    </ul>
                  </div>

                </div>
              </div>
            </div>
            <>
            {projects.slice(1).map((project, index) => <>
                <div className="carousel-item relative float-left w-full" key={index}>
                <img
                  src={project.screenshot}
                  className="projectImage block w-full"
                  alt="Streamin Screenshot"
                />
                <div className=" projectSummary carousel-caption hidden md:block absolute text-center">
                <a class="websiteLink" href={project.websiteLink} target="_blank"><h5 className="sectionSubTitle text-xl">{project.name}</h5></a>
                  <div className="projectDescription">
                    <p>{project.summary}</p>
                    Skills:
                    <ul class="skillsList">
                      {project.skills.map((skill, index) => <li className="projectSkills" key={index}>{skill}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
                  </>)}
            </>
          </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section> 
    )
}

export default Projects