import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Video } from './models/video.model';
import { YoutubeService } from './youtube.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'youtube';
  videos!: Video[];
  constructor(public youtube: YoutubeService, private router: Router) {}
  handleSearch(value: string) {
    this.router.navigate(['search'], { queryParams: { query: value } });
  }
}
