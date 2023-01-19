const Schools = [{
    name: "Arizona State University",
    course: "Software Engineering",
    degree: "BS",
    yearGraduate: "(Expected Garduation: 2026)",
    schoolWebsite: "https://engineering.asu.edu/",
    description: "- Software systems are complex, often including in excess of a million lines of code. Graduates of the BS in software engineering possess knowledge and skills of a defined engineering approach to complex systems analysis, planning, design and construction. The program has a unique, project-driven curriculum, establishing a new model of communication, teamwork, critical thinking and professionalism.",
    image: "images/education/ASU.png",    
    technologies: [{
        logo: "images/education/java.png",
        title: "Java"
    },
    {
        logo: "images/education/eclipse.svg",
        title: "Eclipse IDE"
    },
    {
        logo: "images/education/logo-data-structure.png",
        title: "Data Structures and Algorithm"
    },
    ]
},
{
    name: "General Assembly",
    course: "Software Engineering",
    degree: "Certificate",
    yearGraduate: "(Graduated: 2022)",
    schoolWebsite: "https://engineering.asu.edu/",
    description: "- Software engineering immersive student in an intensive, twelve-week, 450+ hour program focused on product development fundamentals, object-oriented programming, MVC frameworks, data modeling, and team collaboration strategies. Developing a portfolio of individual and group projects.",
    image: "images/education/GA.png",    
    projects: [
        "Streamin (Social Media Platform like)- React, Mongodb, Express, NodeJS, HTML, CSS, Javascript",
        "Spentrace (Butgeting App) - EJS, MongoDB, Express, NodeJS, HTML, CSS, Javascript",
        "Floating Shoe Game - JavaScript, HTML Canvas, CSS",
        "Tamagotchi Game - JavaScript, HTML, CSS"
    ]
}]

module.exports = Schools