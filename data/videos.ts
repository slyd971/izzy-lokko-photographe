export type VideoItem = {
  title: string;
  src: string;
  tag: string;
  description: string;
};

export const videos: VideoItem[] = [
  {
    title: "Soca Wkndr 03",
    src: "/video-soca-wkndr-3.mp4",
    tag: "Event",
    description: "Aftermovie event au rythme direct, pensé pour restituer l'énergie du public.",
  },
  {
    title: "Soca Wkndr 01",
    src: "/video-soca-wkndr-1.mp4",
    tag: "Event",
    description: "Couverture nightlife captée sur le vif, entre tension, mouvement et ambiance.",
  },
  {
    title: "Rap Contenders",
    src: "/video-rapcontender-1.mp4",
    tag: "Culture",
    description: "Image de scène et lecture du public, avec un rendu net et percutant.",
  },
  {
    title: "Rap Contenders 02",
    src: "/video-rap-contender-2.mp4",
    tag: "Recap",
    description: "Recap premium conçu pour prolonger l'impact d'un event après la soirée.",
  },
  {
    title: "La mif",
    src: "/video-lamif1.mp4",
    tag: "La mif",
    description: "Ambiance sélective, nocturne et éditoriale, tenue avec un regard rapide et propre.",
  },
  {
    title: "Eva Modika",
    src: "/video-eva-modika.mp4",
    tag: "Eva Modika",
    description: "Format artiste centré sur la présence, l'allure et le détail.",
  },
];

const homeVideoOrder = [
  "/video-rap-contender-2.mp4",
  "/video-soca-wkndr-1.mp4",
  "/video-eva-modika.mp4",
  "/video-lamif1.mp4",
];

export const homeVideos = homeVideoOrder
  .map((src) => videos.find((video) => video.src === src))
  .filter((video): video is VideoItem => Boolean(video));
