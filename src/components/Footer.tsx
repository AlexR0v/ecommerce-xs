import { FC }           from 'react'
import { AiFillGithub } from 'react-icons/ai'

const Footer: FC = () => {
  return (
    <div className='footer-container'>
      <p>{new Date().getFullYear()} AlexR0v. All rights reserverd</p>
      <p className='icons'>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://github.com/AlexR0v'
        >
          <AiFillGithub />
        </a>
      </p>
    </div>
  )
}

export default Footer

