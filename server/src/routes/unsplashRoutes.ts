import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();
const UNSPLASH_API_URL = 'https://api.unsplash.com';
const ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;

router.get('/photos', async (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: 'Query parameter is required.' });
  }

  try {
    const response = await axios.get(`${UNSPLASH_API_URL}/search/photos`, {
      params: { query, per_page: 10 },
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    });
    res.json(response.data.results);
  } catch (error) {
    console.error('Error fetching photos from Unsplash:', error);
    res.status(500).json({ error: 'Failed to fetch photos.' });
  }
});

export default router;
