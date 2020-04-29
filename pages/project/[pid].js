import { useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Head from 'next/head'
import { motion } from 'framer-motion'

import { createClient } from '../../lib/contentful'
import {
  getNormalizedProject,
  PROJECT_CONTENT_TYPE,
} from '../../lib/normalize-data'
import useBackgroundColor from '../../lib/useBackgroundColor'

import ProjectSection from '../../components/project-types/project-section'
import NavButtons from '../../components/nav-buttons'
import PreviewMode from '../../components/preview-mode'

import './project.css'

const ProjectWrapper = styled.div`
  color: ${(props) => props.color};
`

let easing = [0.175, 0.85, 0.42, 0.96]
const imageVariants = {
  exit: { y: 150, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
}

const textVariants = {
  exit: { y: 100, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1, duration: 0.5, ease: easing },
  },
}

const ProjectHeader = ({ title, hero }) => (
  <div className='Project-Header'>
    <motion.div variants={textVariants}>
      <h4>
        <Link href='/'>
          <a>Claudia Aran</a>
        </Link>
      </h4>
      <h1 className='Project-Title'>{title}</h1>
    </motion.div>

    <motion.img
      src={hero}
      alt='Hero'
      className='Hero'
      variants={imageVariants}
    />
  </div>
)

const Project = ({ hero, title, styles, sections, preview }) => {
  useBackgroundColor(styles.background)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Head>
        <title>{`Claudia Aran | ${title}`}</title>
        <meta name='theme-color' content={styles.background} />
      </Head>
      <ProjectWrapper className='Project' color={styles.color}>
        <motion.div initial='exit' animate='enter' exit='exit'>
          <ProjectHeader hero={hero} title={title} />
          <NavButtons />

          <div className='Project-gallery'>
            {sections.map((section) => (
              <ProjectSection section={section} key={section.id} />
            ))}
          </div>
        </motion.div>
      </ProjectWrapper>
      {preview && <PreviewMode />}
    </>
  )
}

export async function getStaticProps(context) {
  const { pid } = context.params
  const preview = context.preview || false

  const client = createClient({ preview })

  try {
    const { items } = await client.getEntries({
      content_type: PROJECT_CONTENT_TYPE,
    })

    if (items) {
      const project = items.find((item) => item.fields.id === pid)
      const normalizedProject = getNormalizedProject(project)

      return {
        props: {
          ...normalizedProject,
          preview,
        },
      }
    }
  } catch (err) {
    console.error(err)
    return {}
  }
}

export async function getStaticPaths() {
  const client = createClient()

  const { items } = await client.getEntries({
    content_type: PROJECT_CONTENT_TYPE,
  })

  const paths = items.map((item) => {
    const pid = item.fields.id
    return { params: { pid } }
  })

  return {
    paths,
    fallback: false,
  }
}

export default Project
