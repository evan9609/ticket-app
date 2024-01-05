import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire } from '@fortawesome/free-solid-svg-icons'

const PriorityDisplay = ({ priority }:{ priority : number }) => {
  const setColor = (max : number) => {
    return priority > max ? "text-red-400":"text-slate-400"
  }
  return (
    <div className='flex justify-start align-baseline'>
      {
        Array(5).fill(null).map((num,index)=>(
          <FontAwesomeIcon key={index} icon={ faFire } className={`pr-1 ${setColor(index)}`}/>
        ))
      }
    </div>
  )
}

export default PriorityDisplay
