import styles from './StatusDisplay.module.css'

const StatusDisplay = ({status}:{status : string}) => {
  const getColor = (status : string) => {
    let color = "bg-red-200";
    switch(status.toLowerCase()){
      case "done":
        color = "bg-green-200";
        break;
      case "started":
        color = "bg-yellow-200";
        break;
    }
    return color;
  }
  return (
    <div className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${getColor(status)}`}>{status}
    </div>)
}

export default StatusDisplay
