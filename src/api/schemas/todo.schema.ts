import * as mongoose from 'mongoose'

export const TodoSchema = new mongoose.Schema({
  description: { type: String, required: true, trim: true},
  done: { type: Boolean, default: false }
})