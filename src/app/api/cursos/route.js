import { connectDB } from "../../../database/db";
import Cursos from "../../../models/cursos";
import { NextResponse } from "next/server";

export async function GET(){
    const res = await connectDB();
    // console.log(res);

    const courses = await Cursos.find();
    // console.log(courses);
    return NextResponse.json("obteniendo cursos", courses);
}