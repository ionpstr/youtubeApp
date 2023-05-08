import { Component } from '@angular/core';
import { YoutubeService } from 'src/app/youtube.service';
import { Video } from 'src/app/models/video.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent {
  videos!: Observable<Video[]>;
  constructor(public youtube: YoutubeService, private router: Router) {}
  ngOnInit() {
    this.videos = this.youtube.getVideos();
  }
  handleClick(id: any) {
    this.router.navigate(['/videos', id]);
  }
}
