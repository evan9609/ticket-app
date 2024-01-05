"use client";

import { useRouter } from "next/navigation"
import { useState, ChangeEvent, FormEvent} from "react";
import { TypeTicket } from "@/app/types";

type TypeForm = {
  editMode: boolean
  ticketData: TypeTicket | string
}

const EditTicketForm : React.FunctionComponent<TypeForm>= ({editMode,ticketData}) => {
  const router = useRouter();
  const defaultTicketData : TypeTicket = {
    title: "",
    description: "",
    category: "Hardware Problem",
    priority: 1,
    progress: 0,
    status: "Not Started",
  }
  const currentTicketData : TypeTicket = editMode ? Object.assign(defaultTicketData,ticketData) : defaultTicketData

  const [ formData, setFormData] = useState<TypeTicket>(currentTicketData)
  const handleChange = (e : ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prevState)=>({
      ...prevState,
      [name]: value
    }))
  }
  const handleSubmit = async (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(editMode){
      const res= await fetch(`/api/Tickets/${currentTicketData._id}`, {
        method: "PUT",
        body: JSON.stringify({formData}),
        headers: {
          "Content-Type": "application/json", 
        },
      })
  
      if(!res.ok) throw new Error("failed to update Ticket.")

    }else{
      const res= await fetch("/api/Tickets", {
        method: "POST",
        body: JSON.stringify({formData}),
        headers: {
          "Content-Type": "application/json", 
        },
      })
  
      if(!res.ok) throw new Error("failed to create Ticket.")
    }

    router.push("/")
    router.refresh();
  }
  return (
    <div className="flex justify-center">
      <form className="flex flex-col gap-3 w-1/2" method="post" onSubmit={ handleSubmit }>
        <h3>{editMode ? "Update Your Ticket" : "Create Your Ticket"}</h3>

        <label>Title</label>
        <input type="text" name="title" id="title" onChange={ handleChange } required={true} value={String(formData.title)}/>
        <label>Description</label>
        <textarea name="description" id="description" onChange={ handleChange } required={true} rows={5} value={String(formData.description)}/>
        <label>Category</label>
        <select name="category" onChange={ handleChange } value={String(formData.category)}>
          <option value="Hardware Problem">Hardware Problem</option>
          <option value="Software Problem">Software Problem</option>
          <option value="Project">Project</option>
        </select>
        <label>Priority</label>
        <div>
          {
            Array(5).fill(null).map((num,index)=>(
              <>
                <input id="priority-1" name="priority" type="radio" onChange={handleChange} value={index + 1} checked={formData.priority == index + 1}/>
                <label>{index + 1}</label>
              </>
            ))
          }
        </div>
        <label>Progress</label>
        <input type="range" id="progress" name="progress" min="0" max="100" onChange={handleChange} value={Number(formData.progress)}/>
        <label>Status</label>
        <select name="status" id="status" onChange={handleChange} value={String(formData.status)}>
          <option value="not started">Not Started</option>
          <option value="started">Started</option>
          <option value="done">Done</option>
        </select>
        <input type="submit" className="btn" value={editMode ? "Update Ticket": "Create Ticket"}/>
      </form>
    </div>
  )
}

export default EditTicketForm
