import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;
  
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });
  
	
    posts = [
    {
		title: 'Machine à laver',
		content: "Ceci est une Machine à laver mais ca ne va pas du tout parceque ça n'est pas limité telque le souhaite le bonhomme qui a créé ce truc il faut donc changer d'organisation",
		loveIts: 10,
		createdAt: new Date('December 17, 1995 03:24:00')
    },
    {
		title: 'Frigo',
		content: 'Ceci est une Frigo',
		loveIts: -10,
		createdAt: new Date('September 11, 1998 18:22:00')
    },
    {
		title: 'Machine à laver',
		content: 'Ceci est une Machine à laver',
		loveIts: 0,
		createdAt: new Date('January 1, 2000 12:01:00')
    }
  ];
  
  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  
}
