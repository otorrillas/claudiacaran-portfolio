import { motion, AnimateSharedLayout } from 'framer-motion'
import styled from 'styled-components'

import categories from '../data/categories.json'

import './tags.css'

const charcoalColor = '#494949'
const Category = styled(motion.li)`
  position: relative;
  cursor: pointer;

  color: ${(props) => props.active && charcoalColor};
  font-size: ${(props) => props.active && '15px'};
`

const allCategories = [{ id: 'all', title: 'all' }, ...categories]

const Tags = ({ onClick, selectedTag }) => {
  return (
    <AnimateSharedLayout>
      <ol className='Tags'>
        {allCategories.map((category) => (
          <Category
            animate
            key={category.id}
            className='Tags-button'
            onClick={() => onClick(category.id)}
            active={category.id === selectedTag}
          >
            {category.title}
            {category.id === selectedTag && (
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
