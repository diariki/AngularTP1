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
			title: 'lave vaisselle',
			content: "Appareil domestique d'électroménager raccordé à l'eau courante qui sert à laver, rincer et sécher la vaisselle de façon mécanique.",
			loveIts: 10,
			createdAt: new Date('December 17, 1995 03:24:00')
		},
		{
			title: 'refrigerateur',
			content: "Ceci est une Frigo",
			loveIts: -10,
			createdAt: new Date('September 11, 1998 18:22:00')
		},
		{
			title: 'Lave-linge',
			content: "Un lave-linge ou machine à laver le linge, aussi appelé laveuse au Canada francophone et lessiveuse en Belgique, est un appareil électroménager conçu pour nettoyer les vêtements et le linge de maison.",
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
