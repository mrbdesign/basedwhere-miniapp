'use client';

import { useState, useRef, useEffect } from 'react';
import { toPng } from 'html-to-image';
import CountrySelector from './CountrySelector';
import ShareButtons from './ShareButtons';
import MemePreview from './MemePreview';

const MemeGenerator = () => {
  const [location, setLocation] = useState<string>('');
  const [memeUrl, setMemeUrl] = useState<string>('');
  const memeRef = useRef<HTMLDivElement>(null);

  const handleLocationChange = (newLocation: string) => {
    setLocation(newLocation);
  };

  const generateMemeImage = async () => {
    if (memeRef.current === null) {
      return;
    }

    try {
      const dataUrl = await toPng(memeRef.current, { quality: 0.95 });
      setMemeUrl(dataUrl);
    } catch (error) {
      console.error('Error generating meme:', error);
    }
  };

  useEffect(() => {
    if (location) {
      generateMemeImage();
    }
  }, [location]);

  return (
    <div
      className="w-full max-w-md mx-auto rounded-lg shadow-md p-6"
      style={{ backgroundColor: '#cfdee2' }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>
         
      </h1>
      <div className="mb-6">
        <CountrySelector onSelect={handleLocationChange} />
      </div>
      <MemePreview ref={memeRef} location={location} />
      <div className="mt-6">
        <ShareButtons memeUrl={memeUrl} location={location} />
      </div>
    </div>
  );
};

export default MemeGenerator;
