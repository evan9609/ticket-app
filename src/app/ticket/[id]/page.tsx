import { EditTicketForm } from "@/components"
import { TypeTicket } from "@/app/types";

const getTicketById = async (id: any)=>{
	const res = await fetch(`https://ticket-app-uhkp.vercel.app/api/Tickets/${id}`,{
		cache: "no-store",
	})
	if(!res.ok){
		throw new Error("Failed to get ticket.")
	}
	return res.json()
}

export default async function Ticket( { params } : {
	params:{
		id: string
	}
}) {
	const editMode = params.id !== "new" ?? false;
	console.log(editMode)
	let updateTicketData : string | TypeTicket;
	if(editMode){
		updateTicketData = await getTicketById(params.id);
		console.log(updateTicketData)
	}else{
		updateTicketData = "new"
	}
	return (
		<div>
			<EditTicketForm editMode={editMode} ticketData={updateTicketData}/>
		</div>
	)
}
