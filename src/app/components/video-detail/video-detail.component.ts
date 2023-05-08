import { Component } from '@angular/core';
import { Video } from 'src/app/models/video.model';
import { YoutubeService } from 'src/app/youtube.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap, Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.less'],
})
export class VideoDetailComponent {
  video!: Observable<Video[]>;
  constructor(
    private youtube: YoutubeService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}
  ngOnInit() {
    this.video = this.route.params.pipe(
      switchMap((params: any) => {
        return this.youtube.getVideoById(params['id']);
      })
    );
  }
  getSrcUrl(id: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `http://www.youtube-nocookie.com//embed//${id}?version=3`
    );
  }
}
