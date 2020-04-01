import styled from "styled-components"
import Link from "next/link"

import data from "../../data/projects"

import ProjectRow from "../../components/project-types/project-row"
import NavButtons from "../../components/nav-buttons"
import useBackgroundColor from "../../lib/useBackgroundColor"

import "./project.css"

const ProjectWrapper = styled.div`
  color: ${props => props.color};
`

const ProjectHeader = ({ title, hero }) => (
  <div className='Project-Header'>
    <h4>
      <Link href='/studio'>
        <a>Claudia Aran</a>
      </Link>
    </h4>
    <h1 className='Project-Title'>{title}</h1>

    <img src={hero} alt='Hero' className='Hero' />
  </div>
)

const Project = ({ pid }) => {
  const { hero, title, styles, sections } = findProject(pid)

  useBackgroundColor(styles.background)

  return (
    <ProjectWrapper className='Project' color={styles.color}>
      <ProjectHeader hero={hero} title={title} />
      <NavButtons />

      <div className='Project-gallery'>
        {sections.map(row => {
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
    </ProjectWrapper>
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
  const paths = Object.keys(data).map(name => `/project/${name}`)

  return {
    paths,
    fallback: true,
  }
}

export default Project
