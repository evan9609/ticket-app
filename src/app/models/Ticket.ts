import mongoose, { Schema, InferSchemaType } from 'mongoose';

const mongodbUrl = process.env.DB_KEY;

if (!mongodbUrl) {
  console.error("MONGODB_URL is not defined");
} else {
  mongoose.connect(mongodbUrl);
}

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