"use client";

import { useRouter } from "next/navigation"
import { useState, ChangeEvent } from "react";
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

const EditTicketForm = () => {
  const handleChange = (e : ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prevState)=>({
      ...prevState,
      [name]: value
    }))
    console.log(formData)
  }
  const handleSubmit = () => {
    console.log("submitted")
  }
  const startingTicketData = {
    title: "",
    description: "",
    category: "",
    priority: 1,
    progress: 0,
    status: "",
  }
  const [ formData, setFormData] = useState<TypeTicket>(startingTicketData)
  return (
    <div className="flex justify-center">
      <form className="flex flex-col gap-3 w-1/2" method="post" onSubmit={ handleSubmit }>
        <h3>Create Your Ticket</h3>

        <label>Title</label>
        <input type="text" name="title" id="title" onChange={ handleChange } required={true}/>
        <label>Description</label>
        <textarea name="description" id="description" onChange={ handleChange } required={true} rows={5} />
        <label>Category</label>
        <select name="category" onChange={ handleChange }>
          <option value="Hardware Problem">Hardware Problem</option>
          <option value="Software Problem">Software Problem</option>
          <option value="Project">Project</option>
        </select>
      </form>
    </div>
  )
}

export default EditTicketForm
