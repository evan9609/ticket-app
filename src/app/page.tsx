"use client";
import { TicketCard } from "@/components";
import { useEffect, useState } from "react";

const fetchTickets = async () => {
  try{
    const res = await fetch("http://localhost:3000/api/Tickets",{
      cache: "no-store"
    })
    return res.json();
  }catch(error){
    console.log("Failed to get Tickets",error)
  }
}
const Dashboard = () => {
  const [ticketData, setTicketData] = useState({})
  const [uniqueCategories, setUniqueCategories] = useState([])
  async function getTicketData(){
    const { tickets } = await fetchTickets();
    setTicketData(tickets);
    setUniqueCategories([
      ...new Set(tickets.map(({category} : { category : string}) => category)),,
    ]);
  }
  useEffect(()=>{
    getTicketData()
  },[])
  return (
    <div className="p-5">
      <div>
        { ticketData && uniqueCategories?.map((uniqueCategories, categoryIndex)=>(
        <div key={categoryIndex} className="mb-4">
          <h2>{uniqueCategories}</h2>
          <div className="lg:grid grid-cols-2 xl:grid-cols-4">
            {
              ticketData.filter((ticket: any)=>
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