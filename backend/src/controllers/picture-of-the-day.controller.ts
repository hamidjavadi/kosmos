import { NextFunction, Request } from 'express';

import {
  IPodRecord,
  PictureOfTheDayModel,
} from '../database/models/picture-of-the-day.model';
import { getNasaPOD } from '../service/get-pod.service';
import { IApiResponse } from '../types/api.type';

const formatPodRecord = (record: IPodRecord): IPodRecord => ({
  id: record.id,
  date: record.date as string,
  explanation: record.explanation as string,
  image: record.image as string,
  title: record.title as string,
});

const fetchAndSaveNasaPod = async (): Promise<IPodRecord | null> => {
  const response = await getNasaPOD();
  if (!response) return null;

  const picture = await PictureOfTheDayModel.create({
    date: response.date,
    explanation: response.explanation,
    image: response.url,
    title: response.title,
  });

  return formatPodRecord(picture);
};

export const pictureOfTheDayController = async (
  req: Request,
  res: IApiResponse<IPodRecord>,
  next: NextFunction,
) => {
  try {
    const todayDate = new Date().toISOString().split('T')[0];

    // Try to get the latest picture from DB
    const [latestPicture] = await PictureOfTheDayModel.aggregate([
      { $sort: { date: -1 } },
      { $limit: 1 },
    ]);

    // If we have today's picture in DB, return it
    if (latestPicture?.date === todayDate) {
      return res.status(200).json(formatPodRecord(latestPicture));
    }

    // Otherwise fetch from NASA API
    const nasaPod = await fetchAndSaveNasaPod();

    if (nasaPod) {
      return res.status(200).json(nasaPod);
    }

    // Fallback to latest picture if available
    if (latestPicture) {
      return res.status(200).json(formatPodRecord(latestPicture));
    }

    // No pictures available at all
    return res.status(404).json({
      error: 'Picture of the day not found!',
    });
  } catch (error) {
    next(error);
  }
};
