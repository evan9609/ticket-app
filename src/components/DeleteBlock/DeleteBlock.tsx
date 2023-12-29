import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './DeleteBlock.module.css'
import { faX } from '@fortawesome/free-solid-svg-icons'

const DeleteBlock = () => {
  return (
    <div className={styles._component}>
      <FontAwesomeIcon icon={faX} className=' hover:cursor-pointer hover:text-red-200'/>
    </div>
  )
}

export default DeleteBlock
