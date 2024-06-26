import { Clip as ClipType } from "@prisma/client";

export const dummyClips: ClipType[] = [
  {
    id: "456",
    title: "Clip cut moment",
    userId: "er_2fs3oWjiiczLARjZJhS6PO",
    thumbnail: "/images/thumbnail-1.webp",
    awsUrl: "/clips/clip-1.mp4",
    createdAt: new Date(new Date().setTime(new Date().getTime() - 60000000)),
  },
  {
    id: "123",
    title: "My Clip #2",
    userId: "er_2fs3oWjiiczLARjZJhS6PO",
    thumbnail: "/images/thumbnail-2.webp",
    awsUrl: "/clips/clip-2.mp4",
    createdAt: new Date(new Date().setTime(new Date().getTime() - 1000000000)),
  } as any,
  {
    id: "32623623",
    title: "Clip cut",
    userId: "er_2fs3oWjiiczLARjZJhS6PO",
    thumbnail: "/images/thumbnail-3.webp",
    awsUrl: "/clips/clip-3.mp4",
    createdAt: new Date(new Date().setMonth(new Date().getMonth() - 2)),
  },
  {
    id: "ssss",
    title: "Funny Clip",
    userId: "er_2fs3oWjiiczLARjZJhS6PO",
    thumbnail: "/images/thumbnail-4.webp",
    awsUrl: "/clips/clip-4.mp4",
    createdAt: new Date(new Date().setMonth(new Date().getMonth() - 2)),
  },
  {
    id: "sxxxxsaa5623",
    title: "Unique clip",
    description: "Clip taken from my mobile phone",
    userId: "er_2fs3oWjiiczLARjZJhS6PO",
    thumbnail: "/images/thumbnail-5.webp",
    awsUrl: "/clips/clip-4.mp4",
    createdAt: new Date(new Date().setMonth(new Date().getMonth() - 5)),
  },
];
