import Link from 'next/link';
import styles from './TicketCard.module.css'
import { DeleteBlock, PriorityDisplay, ProgressDisplay, StatusDisplay } from '@/components'

const TicketCard = ({ticketId,ticketContent}:{ticketId:number,ticketContent: any}) => {
  const formatTimestamp = (time: any)=>{
    const options : any = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    };

    const date = new Date(time);
    const formattedDate = date.toLocaleString("en-US", options)
    return formattedDate
  }
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className='flex mb-3 justify-between text-red-400'>
        <PriorityDisplay priority={ticketContent.priority}/>
        <div className='mb-auto'>
          <DeleteBlock ticketId={ticketContent._id}/>
        </div>
      </div>
      <Link href={`/ticket/${ticketContent._id}`} style={{display: "contents"}}>
        <h4>{ticketContent.title}</h4>
        <hr className='h-px border-0 bg-page mb-2' />
        <p className='whitespace-pre-wrap'>{ticketContent.title}</p>
        <div className='flex-grow'></div>
        <div className='flex mt-2'>
          <div className="flex flex-col">
            <p className='text-xs my-1'>{formatTimestamp(ticketContent.createdAt)}</p>
            <ProgressDisplay progress={ticketContent.progress}/>
          </div>
          <div className='ml-auto flex items-end'>
            <StatusDisplay status={ticketContent.status}/>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default TicketCard
