"use client";
import React from "react";
import dynamic from "next/dynamic";
import { Clip } from "@prisma/client";
// Components
const ClipPlayer = dynamic(() => import("./ClipPlayer"));

// Props
interface ClipDetailsProps {
  className?: string;
  clip: Clip;
}

const ClipDetails = ({ className = "", clip }: ClipDetailsProps) => {
  return (
    <div className={`${className}`}>
      {/** Player */}
      <ClipPlayer url={clip.awsUrl as string} />
      {/** Title And Description (Details) */}

      <div>
        <h2 className="text-black dark:text-white uppercase text-lg mt-2">
          {clip?.title}
        </h2>
        <p className="text-black/60 dark:text-white/60 text-[15px]">
          {clip?.description}
        </p>
      </div>
    </div>
  );
};

export default ClipDetails;
