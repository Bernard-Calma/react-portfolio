import "./Contacts.css"

const Contacts = () => {
    return (
        <section class = "contacts title" id="sectionContacts">
            <h2 className="sectionTitle">Contacts</h2>
            <div>
                <h3 className="sectionSubTitle">Social Media</h3>
                <ul class="socialMedia">
                    <li class = "socialMediaItem"><a href="https://www.linkedin.com/in/bernard-calma/" target="_blank"  rel="noreferrer"><i class="fa-brands fa-linkedin"></i></a></li>
                    <li class = "socialMediaItem"><a href="https://github.com/Bernard-Calma" target="_blank"  rel="noreferrer"><i class="fa-brands fa-github"></i></a></li>
                    <li class = "socialMediaItem"><a href="https://twitter.com/ryznrd" target="_blank"  rel="noreferrer"><i class="fa-brands fa-twitter"></i></a></li>
                </ul>
                <ul class="contactInformation">
                    <li>Location: Lancaster, CA</li>
                    <li>Email: nard.calma@gmail.com</li>
                </ul>
                <a class="mailTo" href="mailto:nard.calma@gmail.com">✉</a>
            </div>
        </section>
    )
}

export default Contacts