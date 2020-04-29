import React, { useState } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import { motion } from 'framer-motion'

import projects from '../data/project_list.json'
import Gallery from '../components/gallery'

import './studio.css'
import Header from '../components/header'
import Tags from '../components/tags'

function Studio() {
  const [selectedTag, setSelectedTag] = useState('all')

  function handleTagClick(id) {
    setSelectedTag(id)
  }

  function handleProjectClick(id) {
    Router.push(`/project/${id}`)
  }

  return (
    <>
      <Head>
        <title>{`Claudia Aran | Studio`}</title>
      </Head>
      <Header />
      <motion.div
        className='Studio'
        initial='initial'
        animate='enter'
        exit='exit'
      >
        <Tags onClick={handleTagClick} selectedTag={selectedTag} />

        <Gallery
          category={selectedTag}
          projects={projects}
          onProjectClick={handleProjectClick}
        />
      </motion.div>
    </>
  )
}

export default Studio
