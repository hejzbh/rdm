"use server";

import React from "react";
import dynamic from "next/dynamic";
import { HomePageProps } from "@/app/(main)/page";
// Icons
import { ArrowLeftRightIcon } from "lucide-react";
import { getMatchingDetails } from "@/lib/(matching)/get-matching-details";
import { filterUniqueMatchingMoments } from "@/utils/unique-matching-moments";

// Components
const MatchingVideoPlayersProvider = dynamic(
  () => import("@/components/providers/MatchingVideoPlayersProvider")
);
const ClipDetails = dynamic(
  () => import("@/components/main/(matching)/ClipDetails")
);
const VideoDetails = dynamic(
  () => import("@/components/main/(matching)/VideoDetails")
);
const BookmarkButton = dynamic(
  () => import("@/components/main/(matching)/BookmarkButton")
);

// Props
interface MatchingProps {
  searchParams: HomePageProps["searchParams"];
}

const Matching = async ({ searchParams }: MatchingProps) => {
  // 1) User didnt select video
  if (!searchParams.selectedVideoId || !searchParams.selectedClipId) {
    const NotSelectedBanner = dynamic(
      () => import("@/components/banners/NotSelectedBanner"),
      { loading: () => null }
    );

    return (
      <NotSelectedBanner
        title="Please choose one of the videos"
        description="Here will appear a comparison between the clip and video you've chosen"
      />
    );
  }

  // 2) if User has selected clip and video, get matching details
  const matchingDetails = await getMatchingDetails({
    clipId: searchParams?.selectedClipId,
    videoId: searchParams?.selectedVideoId,
  });

  if (!matchingDetails) throw new Error("Matching cannot be found");
  console.log(matchingDetails.matchingMoments);
  return (
    <MatchingVideoPlayersProvider
      matchingMoments={filterUniqueMatchingMoments(
        matchingDetails?.matchingMoments,
        10
      )}
    >
      <div className="p-3 md:p-10 h-full !pb-[10rem] scrollbar-hide overflow-y-scroll flex flex-col items-end">
        <BookmarkButton className="mb-10" matchingId={matchingDetails.id} />
        <div className="flex items-center sm:items-start gap-[3em] sm:gap-5 flex-col sm:flex-row ">
          {/** Clip Details */}
          <ClipDetails clip={matchingDetails?.clip} className="flex-1" />
          {/**?  */}
          <ArrowLeftRightIcon className="sm:mt-[12em] text-textColors-primary" />
          {/** Video Details */}
          <VideoDetails video={matchingDetails?.video} className="flex-1" />
        </div>
      </div>
    </MatchingVideoPlayersProvider>
  );
};

export default Matching;
