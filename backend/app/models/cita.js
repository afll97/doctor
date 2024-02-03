import mongoose from "mongoose";
const citaSchema = new mongoose.Schema({
    fecha: {
        type: mongoose.Schema.Types.Date,
        required: [true,"date is required"]
    },
    description: {
        type: mongoose.Schema.Types.String
    },
    doctor_id: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: [true,"please, choose a doctor"] },
    patient_id: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: [true,"please, choose a patient"] },
});

const citaModel = new mongoose.model("cita",citaSchema);

export {citaModel, citaSchema};