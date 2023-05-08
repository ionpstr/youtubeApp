import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { MusicComponent } from './components/music/music/music.component';
import { NewsComponent } from './components/news/news/news.component';
import { SearchResultsComponent } from './components/search/search-results/search-results.component';
import { VideoDetailComponent } from './components/video-detail/video-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'music', component: MusicComponent },
  { path: 'news', component: NewsComponent },
  { path: 'search', component: SearchResultsComponent },
  { path: 'videos/:id', component: VideoDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
