import mongoose from 'mongoose'

const schema = mongoose.Schema

const EmployeeSchema = new schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  participation: { type: Number, required: true }
})

const Employee = mongoose.model('Employee', EmployeeSchema)

export default Employee