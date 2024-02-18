import React from 'react';
import '../styles/project.css'; // Import the CSS file

const projects = [
  {
    title: 'Text Editor',
    githubLink: 'https://github.com/GaryCutler/Text-editor',
    image: 'https://github.com/GaryCutler/Text-editor/raw/main/img/D26EF78D-1E31-4EE0-8757-A543A253EC7C.jpeg',
    description: 'comprehensive text editor',
  },
  {
    title: 'Book Search',
    githubLink: 'https://github.com/GaryCutler/book-search',
    image: 'https://github.com/GaryCutler/book-search/raw/main/img/books.png',
    description: 'The user should be able to login and search for books. Once they find books they like they should be able to save them and/or delete them.',
  },
  {
    title: 'Schedule Maker',
    githubLink: 'https://github.com/GaryCutler/schedule-maker',
    image: 'https://github.com/GaryCutler/schedule-maker/raw/main/img/Screenshot%202023-09-20%20at%207.03.32%20PM.png',
    description: 'An easy to use schedule maker.',
  },
  {
    title: 'Weather',
    githubLink: 'https://github.com/GaryCutler/weather',
    image: 'https://github.com/GaryCutler/weather/raw/main/assets/images/screenshot.jpeg',
    description: 'A easy to use weather app.',
  }
  // {
  //   title: 'Project 1',
  //   githubLink: 'https://github.com/your-username/project-1',
  //   image: 'https://example.com/project1-image.jpg',
  //   description: 'Description of Project 1.',
  // },
  // {
  //   title: 'Project 1',
  //   githubLink: 'https://github.com/your-username/project-1',
  //   image: 'https://example.com/project1-image.jpg',
  //   description: 'Description of Project 1.',
  // },
  // Repeat the structure for the other projects
];

const Projects = () => {
  return (
    <div>
    <h2>My Projects</h2>
    <div className="project-grid">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <img src={project.image} alt={`Project ${index + 1}`} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
            GitHub Repo
          </a>
        </div>
      ))}
    </div>
  </div>

  )
}

export default Projects