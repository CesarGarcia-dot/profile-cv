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
  portfolios: Portfolio[] = [
    {
      "name": "Resume HTML and CSS",
      "codeUrl": "https://github.com/CesarGarcia-dot/resume-cv-website",
      "siteUrl": "https://cesargarcia-dot.github.io/resume-cv-website/",
      "languages": "HTML - CSS - JavaScript",
      "photo": "../../assets/images/resume.png"
    },
    {
      "name": "Dating APP",
      "codeUrl": "#",
      "siteUrl": "https://github.com/CesarGarcia-dot/DatingAppNetCoreAngular",
      "languages": "C# - HTML - CSS - Angular",
      "photo": "../../assets/images/dating-app.png"
    },
    {
      "name": "Audio Player with Angular",
      "codeUrl": "https://github.com/CesarGarcia-dot/audio-player",
      "siteUrl": "https://cesargarcia-dot.github.io/audio-player/",
      "languages": "HTML - CSS - Angular - oAuth",
      "photo": "../../assets/images/audio-player.png"
    },
    {
      "name": "Kg & furniture accessories site",
      "codeUrl": "#",
      "siteUrl": "https://kgfurnitureaccessories.com/",
      "languages": "Wordpress - HTML - CSS - JavaScript",
      "photo": "../../assets/images/furniture-site.png"
    }
  ];

  animOptions = { animationEffect: 'effect-2' };

  masonryItems: Array<any> = [];

  dateYear: Date = new Date();
  dateYearTwo: any;

  constructor(private projectsService: ProjectsService) {

   

    this.dateYearTwo = this.dateYear.getFullYear();
    const len = 10; // length of grid items


  }



  onNgMasonryInit($event: Masonry) {
    // console.log($event);
    this._masonry = $event;
  }

 

}
