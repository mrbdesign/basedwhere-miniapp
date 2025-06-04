import { forwardRef } from "react";
import Image from "next/image";

interface MemePreviewProps {
  location: string;
}

const MemePreview = forwardRef<HTMLDivElement, MemePreviewProps>(
  ({ location }, ref) => {
    return (
      <div
        ref={ref}
        className="relative w-full aspect-[4/3] bg-white rounded-lg overflow-hidden"
      >
        <Image
          src="/images/HELLO.png"
          alt="HELLO"
          fill // this replaces layout="fill"
          sizes="(max-width: 768px) 100vw, 400px" // required when using fill
          style={{ objectFit: "cover" }} // replaces objectFit prop
          priority // optional: speeds up loading if this is above the fold
        />
        {/* Center the location text on the white portion */}
        <div className="absolute top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
          <p className="text-5xl font-bold text-black">
            {location || "your location"}
          </p>
        </div>
      </div>
    );
  }
);

MemePreview.displayName = "MemePreview";

export default MemePreview;
