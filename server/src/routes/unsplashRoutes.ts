import express from 'express';
import { searchPhotos } from '../services/unsplashService';

const router = express.Router();

router.get('/photos', async (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: 'Query parameter is required.' });
  }

  try {
    const photos = await searchPhotos(query as string);
    res.json(photos);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch photos from Unsplash.' });
  }
});

export default router;
