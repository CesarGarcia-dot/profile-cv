import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  configUrl = 'assets/portfolio.json';

  portfolios: Portfolio[];


  constructor(private http: HttpClient) { }


  getProjects() {
    return this.portfolios = [
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
  }


}


export interface Portfolio {
  name: string;
  codeUrl: string;
  siteUrl: string;
  languages: string;
  photo: string;
}