import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchResultsComponent } from './components/search/search-results/search-results.component';
import { VideoComponent } from './components/video/video.component';
import { YoutubeServiceInjectables } from './youtube.injectables';
import { HomeComponent } from './components/home/home/home.component';
import { MusicComponent } from './components/music/music/music.component';
import { NewsComponent } from './components/news/news/news.component';
import { VideoDetailComponent } from './components/video-detail/video-detail.component';
@NgModule({
  declarations: [AppComponent, SearchResultsComponent, VideoComponent, HomeComponent, MusicComponent, NewsComponent, VideoDetailComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [YoutubeServiceInjectables],
  bootstrap: [AppComponent],
})
export class AppModule {}
