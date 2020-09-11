import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {
  visibleImages = [];
  constructor() { }
  getImages(){
    return this.visibleImages = IMAGES.slice(0);
  }
  getImage(id: number){
    return IMAGES.splice(0).find(image => image.id === id);
  }
}

const IMAGES = [
  {id: 1, category: 'boats', caption: 'boats', url: '/assets/img/pic1.jpg'},
  {id: 2, category: 'camping', caption: 'camping', url: '/assets/img/pic3.jpeg'},
  {id: 3, category: 'adventure', caption: 'adventure', url: '/assets/img/pic5.jpeg'},
  {id: 4, category: 'travelling', caption: 'travelling', url: '/assets/img/pic6.jpeg'},
  {id: 5, category: 'cooking', caption: 'cooking', url: '/assets/img/pic8.jpg'},
  {id: 6, category: 'adventure', caption: 'adventure', url: '/assets/img/pic7.jpg'},
  {id: 7, category: 'boats', caption: 'boats', url: '/assets/img/pic8.jpg'},
  {id: 8, category: 'travelling', caption: 'travelling', url: '/assets/img/pic3.jpeg'},
  {id: 9, category: 'camping', caption: 'camping', url: '/assets/img/pic6.jpeg'},
  {id: 10, category: 'cooking', caption: 'cooking', url: '/assets/img/pic1.jpg'},
];
