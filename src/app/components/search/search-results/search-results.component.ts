import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Video } from 'src/app/models/video.model';
import { YoutubeService } from 'src/app/youtube.service';
import { filter, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.less'],
})
export class SearchResultsComponent {
  videos!: Observable<Video[]>;
  query: string = '';
  queryObs = new Observable<Video[]>();
  constructor(
    private youtube: YoutubeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.videos = this.route.queryParams
      .pipe(filter((params) => params['query']))
      .pipe(switchMap((params) => this.youtube.search(params['query'])));
  }
  handleClick(id: any) {
    this.router.navigate(['/videos', id]);
  }
}
