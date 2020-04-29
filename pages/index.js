import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Router from 'next/router'
import { motion } from 'framer-motion'
import { createClient } from '../lib/contentful'

import { ProjectListItemShape, CategoryShape } from '../lib/prop-types'
import {
  getNormalizedCategories,
  getNormalizedProjectList,
} from '../lib/normalize-data'
import Gallery from '../components/gallery'
import Header from '../components/header'
import Tags from '../components/tags'
import PreviewMode from '../components/preview-mode'

import './studio.css'

const Studio = ({ projects, categories, preview }) => {
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
      {preview && <PreviewMode />}
    </>
  )
}

Studio.propTypes = {
  projects: PropTypes.arrayOf(ProjectListItemShape),
  categories: PropTypes.arrayOf(CategoryShape),
  preview: PropTypes.bool,
}

Studio.defaultProps = {
  projects: [],
  categories: [],
  preview: false,
}

export async function getStaticProps(context) {
  const preview = context.preview || false
  const client = createClient({ preview })

  try {
    const { items } = await client.getEntries()

    if (items) {
      return {
        props: {
          projects: getNormalizedProjectList(items),
          categories: getNormalizedCategories(items),
          preview,
        },
      }
    }
  } catch (err) {
    console.error(err)
    return {}
  }
}

export default Studio
