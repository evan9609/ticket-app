import Ticket from "@/app/models/Ticket";
import { NextResponse } from "next/server";

export async function GET(req :Request,{params}: { params : { id : string} }){
  try {
    const {id} = params;
    const foundTicket = await Ticket.findOne({_id:id});
    return NextResponse.json(foundTicket,{status: 200})
  }catch(error){
    return NextResponse.json({message: "Error", error}, {status: 500})
  }

}

export async function PUT(req: Request,{ params } : { params : { id : string} }){
  try{
    const {id} = params;
    const body = await req.json();
    const ticketData = body.formData;
    // {...ticketData} 是拷貝的意思 ,才能確保更新
    // 如果用 await Ticket.findByIdAndUpdate(id,ticketData) 會被舊的值覆蓋
    // 或是加上 { new: true } 可以確保更新
    await Ticket.findByIdAndUpdate(id, ticketData, { new: true })
    return NextResponse.json({message: "Ticket Update"}, {status: 200})
  }catch(error){
    return NextResponse.json({message: "Error", error}, {status: 500})

  }
}

export async function DELETE(req : Request, { params } : { params : { id : string} }){
  try {
    const { id } = params;
    await Ticket.findByIdAndDelete(id);
    return NextResponse.json({message: "Ticket Delete"}, {status: 200})
  }catch(error){
    return NextResponse.json({message: "Error", error}, {status: 500})

  }
}