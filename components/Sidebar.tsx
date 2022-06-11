import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai'
import { GiTie } from 'react-icons/gi'
import { GoLocation } from 'react-icons/go'
import { BiEnvelope } from 'react-icons/bi'
import { BsTelephoneForward } from 'react-icons/bs'
import Image from 'next/image'

const Sidebar = () => {
    return (
        <>
        <Image
           src='https://avatars.githubusercontent.com/u/70193687?v=4'
           alt='avatar'
           className='mx-auto border rounded-full '
           height="128px"
           width="128px"
        />
        <h3 className='my-4 text-3xl font-medium tracking-wider font-Kaushan'>
           <span className='text-green'>Iqbal</span> Hossan
        </h3>
        
        <p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-black-500'>
           Web Developer
        </p>
        {/* Resume */}
        <a
           href='https://drive.google.com/file/d/1qiq92M_ziDXZOouK9yAfEvPVz7AurWGy/view'  target="_blank" rel='noreferrer'
         //   download='Iqbal Hossan Resume.pdf'
           className='flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-black-500'           
           >
           <GiTie className='w-6 h-6' />
           <span>Download Resume</span>
        </a>

        {/* Socials */}
        <div className='flex justify-around w-9/12 mx-auto my-5 text-green md:w-full ' aria-label='Facebook'>
           <a href='https://www.facebook.com/iqbalhossan1999/'>
              <AiFillFacebook className='w-8 h-8 cursor-pointer' />
           </a>
           <a href='https://www.linkedin.com/in/md-iqbal-hossan-3148161b8/' aria-label='LinkdIn'>
              <AiFillLinkedin className='w-8 h-8 cursor-pointer' />
           </a>
           <a href='https://github.com/iqbalhossan99' aria-label='GitHub'>
              <AiFillGithub className='w-8 h-8 cursor-pointer' />{' '}
           </a>
        </div>

        {/* Contacts */}
        <div
           className='flex flex-col items-center justify-center py-4 my-5 bg-gray-200 dark:bg-black-500'
           style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
           <div className='flex items-center '>
              <GoLocation className='mr-2' /> <span>Noakhali, Bangladesh </span>
           </div>
           <div className='flex items-center '>
              <BiEnvelope className='mr-2' /> <span>engiqbal1999.com </span>
           </div>
           <div className='flex items-center'>
              <BsTelephoneForward className='mr-2' /> <span>(+880)1845555047</span>
           </div>
        </div>

        {/* Email Button */}

        <button
           className='w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none'
           onClick={() => window.open('mailto: engiqbal1999.com')}>
          Send Email
        </button>
        <button
           onClick={() => {}}
           className='w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 focus:outline-none hover:scale-105 '>
           {/* //TODO remove bg black */}
           Change Theme
        </button>
     </>
    );
}

export default Sidebar;