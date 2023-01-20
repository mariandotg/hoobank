import React from 'react'
import Image from 'next/image'
import { File } from '../models'

interface Props {
  logoFile: File
}

const Navbar = ({ logoFile }: Props) => {
  return (
    <nav className='flex items-center justify-between w-full py-6 navbar'>
      <Image
        src={`https:${logoFile.url}`}
        alt='Hoobank logo'
        priority={true}
        width={124}
        height={32}
      />
      Navbar
    </nav>
  )
}

export default Navbar
