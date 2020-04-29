import React from 'react'

import RichText from '@madebyconnor/rich-text-to-jsx'
import {
  TWO_COLUMN_PROJECT_CONTENT_TYPE,
  FULL_WIDTH_PROJECT_CONTENT_TYPE,
} from '../../lib/normalize-data'

const ProjectSection = ({ section }) => {
  switch (section.type) {
    case TWO_COLUMN_PROJECT_CONTENT_TYPE:
      return (
        <>
          <div>
            <RichText richText={section.left} />
          </div>
          <div>
            <RichText richText={section.right} />
          </div>
        </>
      )
    case FULL_WIDTH_PROJECT_CONTENT_TYPE:
      return <img src={section.image} />
    default:
      return null
  }
}

export default ProjectSection
