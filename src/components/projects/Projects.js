import React from "react"
import { projectsData } from "../../data/projectsData"

const Projects = () => {
  return (
    <div className='projects' id='projects'>
      <h1>WHO WE'VE WORKED FOR</h1>
      <h4>Here are some of our clients and projects</h4>
      <div className='projects-center'>
        {projectsData.map((project) => {
          const { id, name, info, img } = project
          return (
            <div key={id} className='project-details'>
              <img src={img} alt={name} />
              <div className='project-info'>
                <h3>{name}</h3>
                <p>{info}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
