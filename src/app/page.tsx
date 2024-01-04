import { TicketCard } from "@/components";
import { TypeTicket } from "./types";


const fetchTickets = async () => {
  try{
    const res = await fetch("https://ticket-app-uhkp.vercel.app/api/Tickets",{
      cache: "no-store"
    })
    return res.json();
  }catch(error){
    console.log("Failed to get Tickets",error)
  }
}
const Dashboard = async() => {
  const { tickets } : { tickets: TypeTicket [] }= await fetchTickets();
  const uniqueCategories : string[] = [
    ...new Set(tickets.map(({category}) => category)),
  ];
  return (
    <div className="p-5">
      <div>
        { tickets && uniqueCategories?.map((uniqueCategories, categoryIndex)=>(
        <div key={categoryIndex} className="mb-4">
          <h2>{uniqueCategories}</h2>
          <div className="lg:grid grid-cols-2 xl:grid-cols-4">
            {
              tickets.filter((ticket)=>
                (ticket.category == uniqueCategories))
                .map((filterTicket, _index)=>(
                  <TicketCard ticketId={_index} key={_index} ticketContent={filterTicket}/>
                ))
            }
          </div>
        </div>))}

      </div>
    </div>
  )
}

export default Dashboard