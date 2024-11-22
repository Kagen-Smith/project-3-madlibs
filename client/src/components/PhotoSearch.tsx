import React, { useState } from 'react';
import axios from 'axios';

const PhotoSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [photos, setPhotos] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get('/api/unsplash/photos', {
        params: { query },
      });
      setPhotos(response.data);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  return (
    <div>
      <h2>Search Unsplash Photos</h2>
      <input
        type="text"
        placeholder="Enter a search term"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px' }}>
        {photos.map((photo: any) => (
          <div key={photo.id} style={{ width: '150px', height: '150px' }}>
            <img
              src={photo.urls.small}
              alt={photo.alt_description}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoSearch;
