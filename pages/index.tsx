import type { NextPage } from 'next'

import contentful from '../services/contentful'

import { DataFormatted } from '../models'

import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Hero,
  Navbar,
  Stats,
  Testimonials,
} from '../components'

interface Props {
  data: DataFormatted
}

const Home: NextPage<Props> = ({ data }) => {
  return (
    <div className='w-full overflow-hidden bg-primary'>
      <div className='paddingX flexCenter'>
        <div className='boxWidth'>
          <Navbar navLinks={data.navLinks} />
        </div>
      </div>
      <div className='bg-primary flexStart'>
        <div className='boxWidth'>
          <Hero />
        </div>
      </div>
      <div className='bg-primary paddingX flexStart'>
        <div className='boxWidth'>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const data = await contentful.getContentfulContent()
  return {
    props: {
      data,
    },
  }
}

export default Home
