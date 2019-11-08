import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreatedAt: Date;
  
  constructor() { }

  ngOnInit() {
  }
	
	onLike(){
		
	  this.postLoveIts += 1;
	}
	
	onDislike(){
	  this.postLoveIts -= 1;
	}
}