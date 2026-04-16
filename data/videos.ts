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
    description: "Une ambiance de foule, de scene et de mouvement prise sur le vif.",
  },
  {
    title: "Soca Wkndr 01",
    src: "/video-soca-wkndr-1.mp4",
    tag: "Event",
    description: "Un format plus direct, pensé pour restituer l'energie du moment.",
  },
  {
    title: "Rap Contenders",
    src: "/video-rapcontender-1.mp4",
    tag: "Culture",
    description: "L'energie de la scene, captee au plus pres.",
  },
  {
    title: "Rap Contenders 02",
    src: "/video-rap-contender-2.mp4",
    tag: "Recap",
    description: "Un montage pensé pour laisser une trace nette après l'événement.",
  },
  {
    title: "Private Event",
    src: "/video-lamif1.mp4",
    tag: "Event",
    description: "Une ambiance plus selective, plus nocturne, plus vive.",
  },
  {
    title: "Portrait",
    src: "/video-eva-modika.mp4",
    tag: "Talent",
    description: "Un format image centré présence, allure et détail.",
  },
];

export const homeVideos = videos.slice(0, 4);
