import { Component, OnInit } from '@angular/core';
import { ImagenesService } from '../../services/imagenes.service';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent implements OnInit {

  personages: any[];

  constructor(private myService: ImagenesService) { }

  ngOnInit(): void {
    this.myService.getAllUsers().subscribe((resp: any[]) => {
      console.log(resp);

      this.personages = resp;
    });
  }

}
