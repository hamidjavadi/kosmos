import mongoose, { Types } from 'mongoose';

export interface IPodRecord {
  id: Types.ObjectId;
  title: string;
  explanation: String;
  date: string;
  image: String;
}

const pictureOfTheDaySchema = new mongoose.Schema<IPodRecord>({
  id: Types.ObjectId,
  title: String,
  explanation: String,
  date: { type: String, index: true, unique: true },
  image: String,
});

export const PictureOfTheDayModel = mongoose.model(
  'picture_of_the_day',
  pictureOfTheDaySchema,
);
