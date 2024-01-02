import Ticket from "@/app/models/Ticket";
import { NextResponse } from "next/server";

export async function DELETE(req : any, { params } : { params : any }){
  try {
    const { id } = params;
    await Ticket.findByIdAndDelete(id);

    return NextResponse.json({message: "Ticket Delete"}, {status: 200})
  }catch(error){
    return NextResponse.json({message: "Error", error}, {status: 500})

  }
}