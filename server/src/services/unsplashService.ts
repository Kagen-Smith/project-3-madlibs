import { createApi } from 'unsplash-js';
import fetch from 'node-fetch'; // Use node-fetch v2.x

const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY!, // Access Key from .env
  fetch, // Required for Node.js
});

export const searchUnsplashPhotos = async (query: string) => {
  try {
    const response = await unsplash.search.getPhotos({
      query,
      perPage: 10, // Limit to 10 photos
    });
    return response.response?.results || [];
  } catch (error) {
    console.error('Error fetching Unsplash photos:', error);
    throw new Error('Failed to fetch photos');
  }
};
