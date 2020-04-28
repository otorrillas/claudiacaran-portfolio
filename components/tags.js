import { motion, AnimateSharedLayout } from 'framer-motion'
import styled from 'styled-components'

import './tags.css'

const charcoalColor = '#494949'
const Category = styled(motion.li)`
  position: relative;
  cursor: pointer;

  color: ${(props) => props.active && charcoalColor};
  font-size: ${(props) => props.active && '15px'};
`

const Tags = ({ categories, onClick, selectedTag }) => {
  return (
    <AnimateSharedLayout>
      <ol className='Tags'>
        {categories.map(({ id, title }) => (
          <Category
            animate
            key={id}
            className='Tags-button'
            onClick={() => onClick(title)}
            active={title === selectedTag}
          >
            {title}
            {title === selectedTag && (
              <motion.div
                layoutId='tag-underline'
                className='Tag-underline'
                style={{ backgroundColor: charcoalColor }}
              />
            )}
          </Category>
        ))}
      </ol>
    </AnimateSharedLayout>
  )
}

export default Tags
