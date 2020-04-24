import { useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Head from 'next/head'

import { motion } from 'framer-motion'

import data from '../../data/projects'

import ProjectRow from '../../components/project-types/project-row'
import NavButtons from '../../components/nav-buttons'
import useBackgroundColor from '../../lib/useBackgroundColor'

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
        <Link href='/studio'>
          <a>Claudia Aran</a>
        </Link>
      </h4>
      <h1 className='Project-Title'>{title}</h1>
    </motion.div>

    <motion.img
      // animate
      src={hero}
      alt='Hero'
      className='Hero'
      variants={imageVariants}
    />
  </div>
)

const Project = ({ pid }) => {
  const { hero, title, styles, sections } = findProject(pid)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useBackgroundColor(styles.background)

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
            {sections.map((row) => {
              switch (row.length) {
                case 1:
                  return (
                    <div className='full-width'>
                      <ProjectRow element={row[0]} />
                    </div>
                  )
                case 2:
                  return (
                    <>
                      <div className='two-col-1'>
                        <ProjectRow element={row[0]} />
                      </div>
                      <div className='two-col-2'>
                        <ProjectRow element={row[1]} />
                      </div>
                    </>
                  )
                default:
                  return null
              }
            })}
          </div>
        </motion.div>
      </ProjectWrapper>
    </>
  )
}

function findProject(id) {
  return data[id]
}

export async function getStaticProps(context) {
  const { pid } = context.params
  return {
    props: { pid },
  }
}

export async function getStaticPaths() {
  const paths = Object.keys(data).map((pid) => ({ params: { pid } }))

  return {
    paths,
    fallback: false,
  }
}

export default Project
