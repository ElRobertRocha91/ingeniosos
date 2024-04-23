import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: String,
    teacher: String,
    description: String
})

export default mongoose.models.Cursos || mongoose.model("Cursos", schema)