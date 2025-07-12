import config from '../config';

interface ApiResponse {
  message: string;
}

const getHello = async (): Promise<ApiResponse> => {
  try {
    const url = `${config.api_url}/hello`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return await response.json();
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('An unknown error occurred');
    }
  }
};

export default getHello;
