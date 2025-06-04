'use client';

import { useMiniAppContext } from "@/hooks/use-miniapp-context";

interface ShareButtonsProps {
  memeUrl: string;
  location?: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ memeUrl, location }) => {
  const { actions } = useMiniAppContext();

  const handleShare = () => {
    if (!actions || !memeUrl) return;
    actions.composeCast({
      text: location
        ? `I'm based in ${location}! Made with the BASEd Where? Meme Generator.`
        : "Made with the BASEd Where? Meme Generator.",
      embeds: [memeUrl], // <-- fallback to embeds
    });
  };

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
    <div className="flex flex-col space-y-4 items-center">
      {/* Instructions and Save Image button */}
      <p className="text-xs text-gray-500 text-center">
        <b>Save your meme image to your device.</b><br />
        On mobile, long-press the image to save it to your photos.
      </p>
      <button
        onClick={handleDownload}
        disabled={!memeUrl}
        className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Save Image
      </button>
      {/* Share to Farcaster button */}
      <button
        onClick={handleShare}
        disabled={!actions || !memeUrl}
        className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-800 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Share to Farcaster
      </button>
    </div>
  );
};

export default ShareButtons;
