import React, { useState } from 'react';

const PhotoSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [photos, setPhotos] = useState<any[]>([]);

  const searchPhotos = async () => {
    try {
      const response = await fetch(`/api/unsplash/search?query=${query}`);
      const data = await response.json();
      setPhotos(data);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  return (
    <div>
      <h2>Search Unsplash Photos</h2>
      <input
        type="text"
        placeholder="Search for photos"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={searchPhotos}>Search</button>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {photos.map((photo) => (
          <img
            key={photo.id}
            src={photo.urls.small}
            alt={photo.alt_description}
            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoSearch;
