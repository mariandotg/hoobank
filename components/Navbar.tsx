import React from 'react'
import Image from 'next/image'
import { File, NavLinkFormatted } from '../models'

interface Props {
  logoFile: File
  navLinks: NavLinkFormatted[]
}

const Navbar = ({ logoFile, navLinks }: Props) => {
  return (
    <nav className='flex items-center justify-between w-full py-6 navbar'>
      <Image
        src={`https:${logoFile.url}`}
        alt='Hoobank logo'
        priority={true}
        width={124}
        height={32}
      />
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.reverse().map((nav: NavLinkFormatted, index: number) => (
          <li
            key={nav.id}
            className={`font-normal cursor-pointer text-[16px] text-white font-poppins ${
              index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
