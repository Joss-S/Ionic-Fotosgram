import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.scss'],
  standalone: false
})
export class CardPostComponent  implements OnInit {

  @Input() liked: boolean = false;
  @Input() saved: boolean = false;
  @Input() likes: number = 125;
 

  constructor() {}
  
ngOnInit() {}
selectheart(){
  this.liked = !this.liked;
  if(this.liked){
    this.likes++;
   }else{
    this.likes--;
   }
}
selectbook(){
  this.saved = !this.saved;
 
}
}
