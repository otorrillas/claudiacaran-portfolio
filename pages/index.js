import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Router from 'next/router'
import { motion } from 'framer-motion'
import { createClient } from 'contentful'

import { ProjectListItemShape, CategoryShape } from '../lib/prop-types'
import {
  getNormalizedCategories,
  getNormalizedProjectList,
} from '../lib/normalize-data'
import Gallery from '../components/gallery'
import Header from '../components/header'
import Tags from '../components/tags'

import './studio.css'

const Studio = ({ projects, categories }) => {
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
        <Tags
          categories={categories}
          onClick={handleTagClick}
          selectedTag={selectedTag}
        />

        <Gallery
          category={selectedTag}
          projects={projects}
          onProjectClick={handleProjectClick}
        />
      </motion.div>
    </>
  )
}

Studio.propTypes = {
  projects: PropTypes.arrayOf(ProjectListItemShape),
  categories: PropTypes.arrayOf(CategoryShape),
}

Studio.defaultProps = {
  projects: [],
  categories: [],
}

export async function getStaticProps(context) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_API_KEY,
  })

  try {
    const { items } = await client.getEntries()

    if (items) {
      return {
        props: {
          projects: getNormalizedProjectList(items),
          categories: getNormalizedCategories(items),
        },
      }
    }
  } catch (err) {
    console.error(err)
    return {}
  }
}

export default Studio
