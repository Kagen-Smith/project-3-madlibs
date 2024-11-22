import axios from 'axios';

const UNSPLASH_API_URL = '/api/unsplash/photos';

export const fetchPhotos = async (query: string) => {
  try {
    const response = await axios.get(UNSPLASH_API_URL, {
      params: { query },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching photos:', error);
    throw error;
  }
};
