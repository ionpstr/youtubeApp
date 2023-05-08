import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Video } from './models/video.model';

export const YOUTUBE_API_URL: string = 'https://www.googleapis.com/youtube/v3';
export const YOUTUBE_API_KEY: string =
  'AIzaSyBISDJSAjwC_OQ7Y7cHkZARBDO8dqYH7_A';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  constructor(
    private http: HttpClient,

    @Inject(YOUTUBE_API_URL) private api_url: string,
    @Inject(YOUTUBE_API_KEY) private api_key: string
  ) {}

  search(q: string): Observable<Video[]> {
    const params = [
      `q=${q}`,
      `key=${this.api_key}`,
      `part=snippet`,
      `type=video`,
      `maxResults=25`,
    ].join('&');
    const queryUrl = `${this.api_url}/search?${params}`;

    return this.http.get(queryUrl).pipe(
      map((response: any) => {
        return response.items.map((item: any) => {
          return new Video({
            videoId: item.id.videoId,
            title: item.snippet.title,
            publishedAt: item.snippet.publishedAt,
            channelId: item.snippet.channelId,
            channelTitle: item.snippet.channelTitle,
            thumbnail: item.snippet.thumbnails.medium,
            description: item.snippet.description,
          });
        });
      })
    );
  }

  getVideos(category?: string): Observable<Video[]> {
    const params = [
      `part=snippet,contentDetails,statistics`,
      `key=${this.api_key}`,
      `chart=mostPopular`,
      `maxResults=100`,
      `videoCategoryId=${category || '0'}`,
    ].join('&');
    const queryUrl = `${this.api_url}/videos?${params}`;
    return this.http.get(queryUrl).pipe(
      map((response: any) => {
        return response.items.map((item: any) => {
          return new Video({
            videoId: item.id,
            title: item.snippet.title,
            publishedAt: item.snippet.publishedAt,
            channelId: item.snippet.channelId,
            channelTitle: item.snippet.channelTitle,
            thumbnail: item.snippet.thumbnails.medium,
            description: item.snippet.description,
          });
        });
      })
    );
  }

  getVideoById(id: string): Observable<Video[]> {
    const params = [`part=snippet`, `key=${this.api_key}`, `id=${id}`].join(
      '&'
    );
    const queryUrl = `${this.api_url}/videos?${params}`;
    return this.http.get(queryUrl).pipe(
      map((response: any) => {
        return response.items.map((item: any) => {
          return new Video({
            videoId: item.id,
            title: item.snippet.title,
            publishedAt: item.snippet.publishedAt,
            channelId: item.snippet.channelId,
            channelTitle: item.snippet.channelTitle,
            thumbnail: item.snippet.thumbnails.medium,
            description: item.snippet.description,
          });
        });
      })
    );
  }
}
