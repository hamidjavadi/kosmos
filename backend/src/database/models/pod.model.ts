import mongoose, { Types } from 'mongoose';

export interface IPodRecord {
  id: Types.ObjectId;
  title: string;
  explanation: string;
  date: string;
  image: string;
}

const PodModelSchema = new mongoose.Schema<IPodRecord>({
  id: Types.ObjectId,
  title: String,
  explanation: String,
  date: { type: String, index: true, unique: true },
  image: String,
});

export const PodModel = mongoose.model('picture_of_the_day', PodModelSchema);
