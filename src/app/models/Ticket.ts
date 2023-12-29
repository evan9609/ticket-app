import mongoose, { Schema, InferSchemaType } from 'mongoose';

mongoose.connect(process.env.MONGODB_URL)
mongoose.Promise = global.Promise

const ticketSchema = new Schema({
    title: String,
    description: String,
    category: String,
    priority: Number,
    progress: Number,
    status: String,
    active: Boolean,
  },
  {
    timestamps: true,
  }
)

type Ticket = InferSchemaType<typeof ticketSchema>

const Ticket = mongoose.models.Ticket || mongoose.model('Ticket', ticketSchema);

export default Ticket;