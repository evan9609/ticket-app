import mongoose, { Schema } from 'mongoose';
import { TypeTicket } from '../../../types';

const mongodbUrl = process.env.DB_KEY;

if (!mongodbUrl) {
  console.error("MONGODB_URL is not defined");
} else {
  mongoose.connect(mongodbUrl);
}

// 這段好像可以不用
mongoose.Promise = global.Promise

const ticketSchema = new Schema<TypeTicket>({
    title: String,
    description: String,
    category: String,
    priority: Number,
    progress: Number,
    status: String,
    active: Boolean,
  },
  {
    // 時間戳
    timestamps: true,
  }
)

// 事實上mongodb會把 Ticket 轉成 collection tickets ,為了使用方便用Ticket較容易辨識
const Ticket = mongoose.models.Ticket || mongoose.model('Ticket', ticketSchema);

export default Ticket;