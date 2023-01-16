// IMPORTS
    // Styles
    import "./About.css"

const About = () => {
    const fadeOut = (event) => {
        event.target.parentElement.classList.add("fadeOut")
        // console.log("FadeOut", event.target.previousSibling)
        setTimeout(() => {
            event.target.parentElement.classList.remove("fadeOut")
        }, 1000);
    }
    return(
        <section className="sectionAboutMe row" id="aboutMe" onLoad={event => fadeOut(event)}>
            <div className="aboutMe col-lg-6">
                <h1 className = "aboutMeName">Hi! I'm Bernard Calma</h1>
                <h3 className = "aboutMeOccupation">I'm a Software Engineer</h3>
                <p className="introduction anim-typewriter">Highly motivated technology professional with more than 10 years of experience in tech and more than 1 year of experience with Full-Stack Development. Experience completing hardware and software troubleshooting, analysis and resolution procedures. Skilled in Six Sigma, Cloud Computing, Automation and Independent/Team Project Management.</p>
            </div>
            <img className="personalImage col-lg-6" src="images/Picture.jpg" alt="Personal Image" />
        </section>
    )
}

export default About;