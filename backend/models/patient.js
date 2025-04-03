// models/patient.js
import mongoose from 'mongoose';
const { Schema } = mongoose;

const PatientInfoSchema = new Schema({
  age: Number,
  height: Number,
  weight: Number,
  bloodGrp: { 
    type: String, 
    enum: ["A+", "B+", "AB+", "O+", "A-", "B-", "AB-", "O-"] 
  },
  familyHistory: String,
  bedNo: Number,
  roomNo: Number,
  other: String
}, { timestamps: true });

const VitalsSchema = new Schema({
  date: Date,
  time: String,
  bloodPressure: Number,
  bodyTemp: Number,
  pulseRate: Number,
  breathingRate: Number
}, { timestamps: true });
  
const PatientSchema = new Schema({
  patient_username: String, // same as email
  password: String,
  name: String,
  profile_pic: String,
  phone_number: String,
  email: { type: String, unique: true },
  address: String,
  patient_info: PatientInfoSchema, // Embedded document
  vitals: [VitalsSchema], // Array of embedded documents
  insurance_details: [{ type: Schema.Types.ObjectId, ref: 'Insurance' }]
}, { timestamps: true });

const Patient = mongoose.model('Patient', PatientSchema);
export default Patient;