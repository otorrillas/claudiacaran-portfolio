import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'

const PreviewContainer = styled(motion.div)`
  position: fixed;
  bottom: 70px;
  right: 25px;
  display: flex;
  opacity: 1;
`

const CloseButton = styled.button`
  top: -10px;
  right: -10px;
  border: none;
  width: 18px;
  height: 18px;
  color: #333333;
  font-size: 16px;
  cursor: pointer;
  display: ${(props) => (props.expanded ? 'flex' : 'none')};
  position: absolute;
  background: #8cd9ff;
  border-radius: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

const bodyAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const BodyContainer = styled.div`
  color: inherit;
  text-decoration: none;
  width: 15px;
  height: 23px;
  overflow: hidden;

  border-radius: 3px;
  background: #8cd9ff;
  color: #000;
  font: initial;
  cursor: pointer;
  letter-spacing: initial;
  text-shadow: initial;
  text-transform: initial;
  visibility: initial;
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 4px 2px;
  align-items: center;
  box-shadow: 0 11px 40px 0 rgba(0, 0, 0, 0.25),
    0 2px 10px 0 rgba(0, 0, 0, 0.12);
  display: flex;

  transition: opacity 0.1s ease, bottom 0.1s ease, width 0.3s ease;
  animation: ${bodyAnimation} 0.1s ease-in-out;

  ${(props) => props.expanded && `width: 115px`}
`

const IconWrapper = styled.div`
  width: 140px;
  height: 20px;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  position: relative;

  svg {
    flex-shrink: 0;
    margin-right: 3px;
  }
`

const PreviewMode = () => {
  const [expanded, setExpanded] = useState(false)

  const toggleExpand = (expand = true) => {
    setExpanded(expand)
  }

  const onPreviewClose = async () => {
    // call /api/clear-preview
    await fetch('/api/clear-preview')
    // force refresh page
    window.location.reload(false)
  }

  return (
    <PreviewContainer
      onHoverStart={() => toggleExpand(true)}
      onHoverEnd={() => toggleExpand(false)}
    >
      <CloseButton
        id='close'
        title='Close preview mode'
        expanded={expanded}
        onClick={onPreviewClose}
      >
        <span style={{ marginRight: '-15px', marginTop: '20px' }}>×</span>
      </CloseButton>

      <BodyContainer expanded={expanded}>
        <IconWrapper id='icon-wrapper'>
          <svg
            width='15'
            height='20'
            viewBox='0 0 60 80'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M36 3L30.74 41H8L36 3Z' fill='black' />
            <path d='M25 77L30.26 39H53L25 77Z' fill='black' />
            <path
              d='M13.5 33.5L53 39L47.5 46.5L7 41.25L13.5 33.5Z'
              fill='black'
            />
          </svg>
          Preview mode
        </IconWrapper>
      </BodyContainer>
    </PreviewContainer>
  )
}

export default PreviewMode
