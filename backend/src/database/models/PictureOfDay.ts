import mongoose, { Types } from 'mongoose';

const pictureOfTheDaySchema = new mongoose.Schema({
  id: Types.ObjectId,
  name: String,
  description: String,
  date: Date,
});

const PictureOfTheDay = mongoose.model(
  'PictureOfTheDay',
  pictureOfTheDaySchema,
);

export default PictureOfTheDay;
