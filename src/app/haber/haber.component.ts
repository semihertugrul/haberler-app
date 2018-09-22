import { Component, OnInit } from '@angular/core';
import { HaberserviceService } from "../haberservice.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-haber',
  templateUrl: './haber.component.html',
  styleUrls: ['./haber.component.css']
})
export class HaberComponent implements OnInit {

  haberler: object;

  constructor(private HaberService: HaberserviceService) { }

  ngOnInit() {
    this.HaberService.getHaber().subscribe(
      data => this.haberler = data
   );
  }

}
