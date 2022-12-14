import type { NextPage } from 'next'

import contentful from '../services/contentful'

import { Data } from '../models'

interface Props {
  data: Data
}

const Home: NextPage<Props> = ({ data }) => {
  return (
    <div>
      <p className='text-red-500'>App</p>
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
