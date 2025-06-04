'use client';

interface ShareButtonsProps {
  memeUrl: string;
  location: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ memeUrl, location }) => {
  const handleDownload = () => {
    if (!memeUrl) {
      console.warn('No meme URL available for download.');
      return;
    }

    const link = document.createElement('a');
    link.href = memeUrl;
    link.download = `based-in-${location.replace(/\s+/g, '-').toLowerCase()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log('Image downloaded:', link.download);
  };

  return (
    <div className="flex flex-col space-y-4">
      <button
        onClick={handleDownload}
        disabled={!memeUrl}
        className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        download image
      </button>
    </div>
  );
};

export default ShareButtons;