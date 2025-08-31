import { NextFunction, Request } from 'express';

import { IPodRecord, PodModel } from '../database/models/pod.model';
import { getNasaPOD } from '../service/get-pod.service';
import { IApiRequest, IApiResponse } from '../types/api.type';

const formatPodRecord = (record: IPodRecord): IPodRecord => ({
  id: record.id,
  date: record.date as string,
  explanation: record.explanation as string,
  image: record.image as string,
  title: record.title as string,
});

const formatPodRecords = (records: IPodRecord[]): IPodRecord[] =>
  records.map(formatPodRecord);

const fetchAndSaveNasaPod = async (): Promise<IPodRecord | null> => {
  const response = await getNasaPOD();
  if (!response) return null;

  const picture = await PodModel.create({
    date: response.date,
    explanation: response.explanation,
    image: response.url,
    title: response.title,
  });

  return formatPodRecord(picture);
};

export const PodController = async (
  req: Request,
  res: IApiResponse<IPodRecord>,
  next: NextFunction,
) => {
  try {
    const todayDate = new Date().toISOString().split('T')[0];

    // Try to get the latest picture from DB
    const [latestPicture] = await PodModel.aggregate([
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

export const PodHistoryController = async (
  req: IApiRequest<{
    count?: number;
  }>,
  res: IApiResponse<IPodRecord[]>,
  next: NextFunction,
) => {
  try {
    // Try to get latest pictures from DB
    const pictures = await PodModel.aggregate([
      { $sort: { date: -1 } },
      { $limit: Number(req.query.count || 10) },
    ]);

    return res.status(200).json(formatPodRecords(pictures));
  } catch (error) {
    next(error);
  }
};
