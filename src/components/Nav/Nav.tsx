import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faTicket } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
  return (
    <nav className='flex justify-between p-4 bg-nav'>
      <div className='flex items-center space-x-4'>
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon" />
        </Link>
        <Link href="/ticket/new">
          <FontAwesomeIcon icon={faTicket} className="icon" />
        </Link>
      </div>
      <div>
        <p className='text-default-text'>Nav</p>
      </div>
    </nav>
  )
}

export default Nav
