import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './PriorityDisplay.module.css'
import { faFire } from '@fortawesome/free-solid-svg-icons'

const PriorityDisplay = () => {
  return (
    <div className='flex justify-start align-baseline'>
      <FontAwesomeIcon icon={ faFire } className='text-ted-400'/>

    </div>
  )
}

export default PriorityDisplay
