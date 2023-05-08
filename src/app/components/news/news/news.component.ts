import { Component } from '@angular/core';
import { Video } from 'src/app/models/video.model';
import { YoutubeService } from 'src/app/youtube.service';
import { categories } from 'src/app/category';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less'],
})
export class NewsComponent {
  videos!: Observable<Video[]>;
  constructor(private youtube: YoutubeService, private router: Router) {}
  ngOnInit() {
    this.videos = this.youtube.getVideos(categories['news']);
  }
  handleClick(id: any) {
    this.router.navigate(['/videos', id]);
  }
}
