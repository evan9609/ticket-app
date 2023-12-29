

import styles from './ProgressDisplay.module.css'

const ProgressDisplay = () => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div className='h-2.5 rounded-full bg-blue-600' style={{width: "75%"}}></div>

    </div>
  )
}

export default ProgressDisplay
