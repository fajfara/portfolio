interface Format {
  url: string;
}

interface VideoPreview {
  url: string;
}

interface Project {
  title: string;
  summary: string;
  screenshots: { formats: { medium: Format } }[];
  video_preview: VideoPreview;
}

export type { Project, Format, VideoPreview };
