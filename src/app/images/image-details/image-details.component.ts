import { Routes, Router, ActivatedRoute } from '@angular/router';
import { ImageServiceService } from './../../services/image-service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent implements OnInit {
  image: any;
  constructor(private imgServ: ImageServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.image = this.imgServ.getImage(
     +this.route.snapshot.params['id']
   );
  }

}
