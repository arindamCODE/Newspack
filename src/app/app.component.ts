import { NewsService } from './news.service';
import { Component } from '@angular/core';
import { News } from './news';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  news: News[];
  query: string;
  constructor(private newsService: NewsService) { }

  onSearch() {
    this.newsService.search(this.query).subscribe(data => console.log(data));
  }
}