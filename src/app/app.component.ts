import { Component } from '@angular/core';
import { Portfolio, ProjectsService } from './data/projects.service';
import { Masonry } from './mansory';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyProfile';
  count = 0;
  _masonry: Masonry;
  showMasonry = true;
  portfolios: Portfolio[];

  animOptions = { animationEffect: 'effect-2' };

  masonryItems: Array<any> = [];

  dateYear: Date = new Date();
  dateYearTwo: any;

  constructor(private projectsService: ProjectsService) {

    this.getProjects();

    this.dateYearTwo = this.dateYear.getFullYear();
    const len = 10; // length of grid items


  }



  onNgMasonryInit($event: Masonry) {
    // console.log($event);
    this._masonry = $event;
  }

  getProjects() {
    this.portfolios = this.projectsService.getProjects();
  }

}
