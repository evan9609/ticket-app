"use client";

import { useRouter } from "next/navigation"
import { useState, ChangeEvent, FormEvent} from "react";
import styles from './EditTicketForm.module.css'

interface TypeTicket {
  title: String;
  description: String;
  category: String;
  priority: Number;
  progress: Number;
  status: String;
  active?: Boolean;
}

const EditTicketForm = ({editMode,ticketData}:{editMode:boolean,ticketData:any}) => {
  const router = useRouter();
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
      console.log(ticketData._id)
      const res= await fetch(`/api/Tickets/${ticketData._id}`, {
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
  const startingTicketData = {
    title: editMode ? ticketData.title : "",
    description: editMode ? ticketData.description : "",
    category: editMode ? ticketData.category : "Hardware Problem",
    priority: editMode ? ticketData.priority : 1,
    progress: editMode ? ticketData.progress : 0,
    status: editMode ? ticketData.status : "Not Started",
  }
  const [ formData, setFormData] = useState<TypeTicket>(startingTicketData)
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
          <input id="priority-1" name="priority" type="radio" onChange={handleChange} value={1} checked={formData.priority == 1}/>
          <label>1</label>
          <input id="priority-2" name="priority" type="radio" onChange={handleChange} value={2} checked={formData.priority == 2}/>
          <label>2</label>
          <input id="priority-3" name="priority" type="radio" onChange={handleChange} value={3} checked={formData.priority == 3}/>
          <label>3</label>
          <input id="priority-4" name="priority" type="radio" onChange={handleChange} value={4} checked={formData.priority == 4}/>
          <label>4</label>
          <input id="priority-5" name="priority" type="radio" onChange={handleChange} value={5} checked={formData.priority == 5}/>
          <label>5</label>
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
