import { NextFunction, Request } from 'express';

import {
  IPodRecord,
  PictureOfTheDayModel,
} from '../database/models/picture-of-the-day.model';
import { INasaPodApiResponse, getNasaPOD } from '../service/get-pod.service';
import { IApiResponse } from '../types/api.type';

export const pictureOfTheDayController = async (
  req: Request,
  res: IApiResponse<IPodRecord>,
  next: NextFunction,
) => {
  try {
    const todayDate = new Date();
    const todayFormattedDate = todayDate.toISOString().split('T')[0];
    const pictures: IPodRecord[] = await PictureOfTheDayModel.aggregate([
      { $sort: { date: -1 } },
      { $limit: 1 },
    ]);

    if (pictures.length) {
      const todayPicture = pictures.find(
        (item) => item.date === todayFormattedDate,
      );

      if (todayPicture) {
        return res.status(200).json(todayPicture);
      }

      const response: INasaPodApiResponse | null = await getNasaPOD();

      if (response) {
        const picture = await PictureOfTheDayModel.create({
          date: response.date,
          explanation: response.explanation,
          image: response.url,
          title: response.title,
        });

        const result: IPodRecord = {
          id: picture.id,
          date: picture.date as string,
          explanation: picture.explanation as string,
          image: picture.image as string,
          title: picture.title as string,
        };

        return res.status(200).json(result);
      }

      return res.status(200).json(pictures[0]);
    }

    if (!pictures.length) {
      const response: INasaPodApiResponse | null = await getNasaPOD();

      if (response) {
        const picture = await PictureOfTheDayModel.create({
          date: response.date,
          explanation: response.explanation,
          image: response.url,
          title: response.title,
        });

        const result: IPodRecord = {
          id: picture.id,
          date: picture.date as string,
          explanation: picture.explanation as string,
          image: picture.image as string,
          title: picture.title as string,
        };

        return res.status(200).json(result);
      }

      return res.status(404).json({
        error: 'Picture of the day not found!',
      });
    }
  } catch (error) {
    next(error);
  }
};
