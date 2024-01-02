import { TicketCard } from "@/components"

const getTickets = async () => {
  try{
    const res = await fetch("http://localhost:3000/api/Tickets",{
      cache: "no-store"
    })

    return res.json();
  }catch(error){
    console.log("Failed to get Tickets",error)
  }
}
const Dashboard = async () => {
  const { tickets } = await getTickets();
  const uniqueCategories : string[] = [
    ...new Set(tickets.map(({category} : { category : string}) => category)),,
  ];
  console.log(uniqueCategories)
  return (
    <div className="p-5">
      <div>
        { tickets && uniqueCategories?.map((uniqueCategories, categoryIndex)=>(
        <div key={categoryIndex} className="mb-4">
          <h2>{uniqueCategories}</h2>
          <div className="lg:grid grid-cols-2 xl:grid-cols-4">
            {
              tickets.filter((ticket: any)=>
                (ticket.category == uniqueCategories))
                .map((filterTicket: any, _index : number)=>(
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