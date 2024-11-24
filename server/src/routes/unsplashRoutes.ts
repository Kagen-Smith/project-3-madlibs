import express from 'express';
import { searchUnsplashPhotos } from '../services/unsplashService';

const router = express.Router();

// Route to search Unsplash photos
router.get('/search', async (req, res) => {
  const { query } = req.query;

  if (!query) {
    // Respond with a 400 error if the query parameter is missing
    return res.status(400).json({ message: 'Query parameter is required' });
  }

  try {
    // Fetch photos from Unsplash API
    const photos = await searchUnsplashPhotos(query as string);
    // Respond with the fetched photos
    return res.json(photos);
  } catch (error) {
    // Handle errors and respond with a 500 status code
    console.error('Error fetching Unsplash photos:', error);
    return res.status(500).json({ message: 'Failed to fetch photos' });
  }
});

export default router;
