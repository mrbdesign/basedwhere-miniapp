'use client';

import { useState } from 'react';

interface CountrySelectorProps {
  onSelect: (location: string) => void;
}

const CountrySelector: React.FC<CountrySelectorProps> = ({ onSelect }) => {
  const [location, setLocation] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLocation = e.target.value;
    setLocation(newLocation);
    onSelect(newLocation);
  };

  return (
    <div className="mb-4">
      <p className="text-3xl font-bold text-black mb-4">
        Where are you BASEd?
      </p>
      <input
        type="text"
        id="location"
        value={location}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded text-black bg-white"
        placeholder="Enter your location..."
      />
    </div>
  );
};

export default CountrySelector;