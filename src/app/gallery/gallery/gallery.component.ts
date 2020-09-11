import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { ImageServiceService } from './../../services/image-service.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges{
  title = 'Gallery';
  visibleImage: any[] = [];
  @Input() filterBy? : string = 'all';
  constructor(private imageService: ImageServiceService) { }

  ngOnInit(): void {
    this.visibleImage = this.imageService.getImages();
  }

  ngOnChanges(): void {
    this.visibleImage = this.imageService.getImages();
    console.log(this.visibleImage);
  }

}
