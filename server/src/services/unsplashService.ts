import { createApi } from 'unsplash-js';
import nodeFetch from 'node-fetch';

const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY!, // Access Key from .env
  fetch: nodeFetch, // Required for Node.js
});

// Function to search Unsplash for photos
export const searchUnsplashPhotos = async (query: string) => {
  try {
    const response = await unsplash.search.getPhotos({
      query,
      perPage: 10, // Limit results to 10 photos
    });
    return response.response?.results || [];
  } catch (error) {
    console.error('Error fetching Unsplash photos:', error);
    throw new Error('Failed to fetch photos');
  }
};
