import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: String,
    consultant: String,
    description: String
})

export default mongoose.models.Consultorios || mongoose.model("Consultorios", schema)