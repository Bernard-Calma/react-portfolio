// STYLES
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';

// CONTAINERS
import Header from './components/Header';
import Main from './containers/Main';

const App = () => {
  const [schools] = useState(
    [{
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
      schoolWebsite: "https://generalassemb.ly/",
      description: "- Software engineering immersive student in an intensive, twelve-week, 450+ hour program focused on product development fundamentals, object-oriented programming, MVC frameworks, data modeling, and team collaboration strategies. Developing a portfolio of individual and group projects.",
      image: "images/education/GA.png",    
      projects: [
          "Streamin (Social Media Platform like)- React, Mongodb, Express, NodeJS, HTML, CSS, Javascript",
          "Spentrace (Butgeting App) - EJS, MongoDB, Express, NodeJS, HTML, CSS, Javascript",
          "Floating Shoe Game - JavaScript, HTML Canvas, CSS",
          "Tamagotchi Game - JavaScript, HTML, CSS"
      ]
    },
    {
      name: "STI College Bacoor",
      course: "Computer Technology",
      degree: "AS",
      yearGraduate: "(Graduated: 2009)",
      schoolWebsite: "https://www.sti.edu/",
      description: "- Studied various programming methodologies, computer networks and concepts, basic computation, and data processing.",
      image: "images/education/STI.png",    
      projects: [
          "Social Media website - Java, NetBeans",
          "Hotel Room and Reservation System - VB.net, Microsoft Access",
          "Powering a Radio using a Solar Panel - Arduino",
      ]
    }]
  )

  const [websiteProjects] = useState(
    [{
      name: "Streamin",
      websiteLink: "https://stream-in.herokuapp.com/",
      summary: "Streamin is a React-based social media app that allows users to post videos they find interesting with full CRUD capabilites. Meaning they can create, show, update, and delete the posts they make. All while being able to like the videos posted by themselves and other users, as well as comment on videos and like said comments.",
      skills: ["HTML", "CSS", "JavaScript", "React", "MongoDB", "Express", "NodeJS"],
      screenshot: "images/projects/Streamin.png"
  },
  {
      name: "Spentrace",
      websiteLink: "https://spentrace.herokuapp.com/",
      summary: "This app can be used for simple budgeting tool, you can enter your earnings and expenses or expected cash flow everyday and will give you your how much you owe, your available spending and how much you'll need until the next expense.",
      skills: ["HTML", "CSS", "JavaScript", "React", "MongoDB", "Express", "NodeJS"],
      screenshot: "images/projects/Spentrace.png"
  },
  {
      name: "Floating Shoe",
      websiteLink: "https://bernard-calma.github.io/project-1/",
      summary: "Floating Shoe is a game where you as a player will be a flying shoe and you need to avoid those feet that are trying to get into you as you move forward.",
      skills: ["HTML", "CSS", "JavaScript", "HTML Canvas"],
      screenshot: "images/projects/FloatingShoe.png"
  },
  {
      name: "Tamagotchi",
      websiteLink: "https://bernard-calma.github.io/tamagotchi-project/",
      summary: "Based on a 90's game called Tamagochi. Take care of your pet, feed, play with it. Fall inlove with it <3",
      skills: ["HTML", "CSS", "JavaScript"],
      screenshot: "images/projects/Tamagotchi.png"
  }]
  )

  const [works] = useState(
    [
      {
          company: "Sutherland Global Services",
          position: "Subject Matter Expert",
          startMonth: 3,
          startYear: 2014,
          endMonth: 1,
          endYear: 2018,
          jobDescription: `• Provided support and management to different teams and projects to improve service level for different accounts.
          • Supervised meetings/huddles with different teams to provide action plans and coachings to improve the team's stats.
          • Collaborated with upper management and other departments to analyze data and process quality to make sure it meets the client’s requirements and exceeds expectations.
          • Handled customer’s issues and concerns regarding their Internet, Analog/Digital Phone and TV and provided troubleshooting steps to resolve any issue.`,
      }
  ]
  )

  return (
    <div className="app">
      <Header />
      <Main 
        schools = {schools}
        websiteProjects = {websiteProjects}
        works = {works}
      />
    </div>
  );
}

export default App;
