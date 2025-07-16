import config from '../config';

export async function getNasaPOD(): Promise<INasaPodApiResponse | null> {
  try {
    const apiURL = `${config.apis?.POD}?api_key=${config.nasaAPIKey as string}`;
    const apiResponse = await fetch(apiURL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    if (!apiResponse.ok) {
      return null;
    }

    return (await apiResponse.json()) as INasaPodApiResponse;
  } catch (error) {
    return null;
  }
}

export interface INasaPodApiResponse {
  title: string;
  explanation: String;
  date: string;
  url: String;
}
