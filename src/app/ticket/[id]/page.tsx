import { EditTicketForm } from "@/components"
import { AnyBulkWriteOperation } from "mongodb";

const getTicketById = async (id: any)=>{
	const res = await fetch(`http://localhost:3000/api/Tickets/${id}`,{
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
	let updateTicketData = {};
	if(editMode){
		updateTicketData = await getTicketById(params.id);
		updateTicketData = updateTicketData.foundTicket;
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
