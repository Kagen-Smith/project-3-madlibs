import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const UNSPLASH_API_URL = 'https://api.unsplash.com';
const ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;

if (!ACCESS_KEY) {
  throw new Error('Unsplash API Access Key is not defined in environment variables.');
}

export const searchPhotos = async (query: string) => {
  try {
    const response = await axios.get(`${UNSPLASH_API_URL}/search/photos`, {
      params: {
        query,
        per_page: 10, // Adjust the number of results
      },
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    });
    return response.data.results; // Array of photo objects
  } catch (error) {
    console.error('Error fetching photos from Unsplash:', error);
    throw error;
  }
};
