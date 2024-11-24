import express from 'express';
import { searchUnsplashPhotos } from '../services/unsplashService';

const router = express.Router();

router.get('/search', async (req, res) => 
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ message: 'Query parameter is required' });
  }

  try {
    const photos = await searchUnsplashPhotos(query as string);
    res.json(photos);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch photos' });
  }
});

export default router;
