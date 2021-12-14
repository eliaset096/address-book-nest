import { Schema } from 'mongoose';
export const ContatSchema = new Schema({
  first_name: String,
  last_name: String,
  phone_number: String,
  email: String,
  address: String,
  company: String,
  job_position: String,
  created_at: { type: Date, default: Date.now },
});
