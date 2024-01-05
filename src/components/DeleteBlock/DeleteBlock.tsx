"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/navigation'

const DeleteBlock = ({ticketId}:{ticketId : string}) => {
  const router = useRouter();
  const deleteTicket = async() => {
    const res = await fetch(`/api/Tickets/${ticketId}`,{
      method: "DELETE"
    })
    if(res.ok){
      router.refresh()
    }
  }
  return (
    <div onClick={deleteTicket}>
      <FontAwesomeIcon icon={faX} className=' hover:cursor-pointer hover:text-red-200'/>
    </div>
  )
}

export default DeleteBlock
