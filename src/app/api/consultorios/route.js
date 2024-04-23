import { connectDB } from "../../../database/db";
import Consultorios from "../../../models/consultorios";
import { NextResponse } from "next/server";

export async function GET(){
    await connectDB();

    const consultorios = await Consultorios.find();
    return NextResponse.json("Obteniendo consultorios", consultorios);
}