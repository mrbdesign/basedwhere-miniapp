'use client';

import { useMiniAppContext } from "@/hooks/use-miniapp-context";

interface ShareButtonsProps {
  memeUrl: string;
  location?: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ memeUrl, location }) => {
  const { actions } = useMiniAppContext();

  // Share to Farcaster (native)
  const handleShare = () => {
    if (!actions || !memeUrl) return;
    actions.composeCast({
      text: location
        ? `I'm based in ${location}! Made with the BASEd Where? Meme Generator.`
        : "Made with the BASEd Where? Meme Generator.",
      embeds: [memeUrl],
    });
  };

  // Save to Photos (download)
  const handleDownload = () => {
    if (!memeUrl) return;
    const link = document.createElement('a');
    link.href = memeUrl;
    link.download = `based-in-${location?.replace(/\s+/g, '-').toLowerCase() || 'meme'}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col space-y-4">
      <button
        onClick={handleShare}
        disabled={!actions || !memeUrl}
        className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-800 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Share to Farcaster
      </button>
      <button
        onClick={handleDownload}
        disabled={!memeUrl}
        className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Save Image
      </button>
      <p className="text-xs text-gray-500 mt-2">
        On mobile, long-press the button to save the image in photos.
      </p>
    </div>
  );
};

export default ShareButtons;
