export class Video {
  videoId: string;
  title: string;
  publishedAt: string;
  channelId: string;
  channelTitle: string;
  thumbnail: { url: string; width: number; height: number };
  description: string;

  constructor(obj?: any) {
    this.videoId = (obj && obj.videoId) || null;
    this.title = (obj && obj.title) || null;
    this.publishedAt = (obj && obj.publishedAt) || null;
    this.channelId = (obj && obj.channelId) || null;
    this.channelTitle = (obj && obj.channelTitle) || null;
    this.thumbnail = (obj && obj.thumbnail) || null;
    this.description = (obj && obj.description) || null;
  }
}
