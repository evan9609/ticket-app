const ProgressDisplay = ({progress} : {progress:number}) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div className='h-2.5 rounded-full bg-blue-600' style={{width: `${progress}%`}}></div>

    </div>
  )
}

export default ProgressDisplay
