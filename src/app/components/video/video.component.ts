import { Component, Input } from '@angular/core';
import { Video } from 'src/app/models/video.model';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.less'],
})
export class VideoComponent {
  @Input() video!: Video;
  @Input() row!: boolean;
  constructor() {}
}
