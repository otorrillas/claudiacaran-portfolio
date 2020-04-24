import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import Description from '../components/description'
import Portrait from '../components/portrait'
import Section from '../components/sections/section'
import SocialSection from '../components/sections/section-social'
import ServicesSection from '../components/sections/section-services'
import Biography from '../components/sections/section-biography'
import Awards from '../components/sections/section-awards'
import Clients from '../components/sections/section-clients'
import CopyrightSection from '../components/sections/section-copyright'
import useBackgroundColor from '../lib/useBackgroundColor'

import './about.css'
import { motion } from 'framer-motion'

const backgroundColor = '#F4F1EF'

function About() {
  useBackgroundColor(backgroundColor)

  return (
    <motion.div animate>
      <Head>
        <title>{`Claudia Aran | About`}</title>
        <meta name='theme-color' content={backgroundColor} />
      </Head>
      <Header />
      <div className='About'>
        <Portrait />
        <Description />
        <div className='col1'>
          <Section title='Contact'>studio@claudiacaran.com</Section>
          <SocialSection />
          <CopyrightSection />
        </div>
        <div className='col2'>
          <Biography />
        </div>
        <div className='col3'>
          <ServicesSection />
          <Awards />
          <Clients />
        </div>
      </div>
    </motion.div>
  )
}

export default About
