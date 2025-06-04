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
      media: [{ url: memeUrl, type: "image/png" }], // Attach the image as media
    });
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
    </div>
  );
};

export default ShareButtons;
