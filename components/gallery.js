import React from 'react'
import './gallery.css'

import GalleryProject from './gallery-project'

function Gallery({ category, projects, onProjectClick }) {
  function handleProjectClick(id) {
    onProjectClick(id)
  }

  const filteredProjects =
    category !== 'all'
      ? projects.filter((project) => project.categories.includes(category))
      : projects

  return (
    <div className='Gallery'>
      {filteredProjects.map((project) => (
        <GalleryProject
          key={project.id}
          project={project}
          onClick={handleProjectClick}
        />
      ))}
    </div>
  )
}

export default Gallery
