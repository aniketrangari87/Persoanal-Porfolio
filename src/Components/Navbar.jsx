import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub} from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'

function Navbar() {
  return (
    <nav className='flex px-4 py-6 mb-20 justify-between items-center'>
        <div className='flex flex-shrink-0 items-center '>
            <h1 className='mx-2 text-2xl'>AnyTech</h1>
        </div>
       
        <div className='m-8 flex justify-center items-center gap-4 text-2xl'>
        <FaFacebook/>
        <FaLinkedin/>
        <FaGithub/>
        <FaTwitter/>
        <FaInstagram/>
        </div>
        
    </nav>
   

  )
}

export default Navbar