import React from 'react'
import Image from 'next/image'
import { NavLinkFormatted } from '../models'
import { close, logo, menu } from '../assets'

interface Props {
  navLinks: NavLinkFormatted[]
}

const Navbar = ({ navLinks }: Props) => {
  const [toggle, setToggle] = React.useState(false)

  return (
    <nav className='flex items-center justify-between w-full py-6 navbar'>
      <Image
        src={logo}
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
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <Image
          src={`https:${toggle ? close : menu}`}
          className='object-contain'
          alt='Menu'
          width={28}
          height={28}
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } p-6 bg-black-gradient absolute top-16 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.reverse().map((nav: NavLinkFormatted, index: number) => (
              <li
                key={nav.id}
                className={`font-normal cursor-pointer text-[16px] text-white font-poppins ${
                  index === navLinks.length - 1 ? 'mb-0' : 'mb-4'
                }`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
