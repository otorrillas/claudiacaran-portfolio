import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const GalleryCard = styled(motion.div)`
  background: url(${(props) => props.background});
  background-size: cover;
  background-repeat: no-repeat;

  .Gallery-Project-hover-section {
    display: none;
  }

  &:hover {
    background: ${(props) => props.hoverColor} !important;

    .Gallery-Project-hover-section {
      display: block;
    }
  }
`

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }
const thumbnailVariants = {
  initial: { scale: 0.96, y: 30, opacity: 0 },
  enter: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
  },
  exit: {
    scale: 0.6,
    y: 100,
    opacity: 0,
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] },
  },
  hover: { scale: 0.97 },
}

function GalleryProject({ onClick, project }) {
  const {
    id,
    title,
    client,
    year,
    tags,
    background: { thumbnail },
  } = project

  function handleClick() {
    onClick(id)
  }

  return (
    <GalleryCard
      className='Gallery-Project'
      key={id}
      hoverColor={project.background.hover}
      whileHover='hover'
      onClick={handleClick}
      variants={thumbnailVariants}
      transition={transition}
      background={thumbnail}
    >
      <div className='Gallery-Project-hover-section'>
        <h3>{title}</h3>
        <p>
          {client}, {year}
        </p>
        <p>{tags.join(', ')}</p>
      </div>
    </GalleryCard>
  )
}

export default GalleryProject
