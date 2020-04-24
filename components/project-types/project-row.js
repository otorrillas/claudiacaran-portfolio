import React from 'react'

import { types } from '../../constants/project-types'

import Image from './image'
import Text from './text'
import Title from './title'

function ProjectRow({ element }) {
  if (Object.entries(element).length === 0) return null

  let text

  switch (element.type) {
    case types.image:
      const { src, alt } = element
      return <Image src={src} alt={alt} />

    case types.title:
      const { title, date } = element
      return <Title title={title} date={date} />

    case types.text:
      text = element.text
      return <Text>{text}</Text>

    case types.html:
      text = element.text
      return <div dangerouslySetInnerHTML={{ __html: text }} />

    default:
      return null
  }
}

export default ProjectRow
