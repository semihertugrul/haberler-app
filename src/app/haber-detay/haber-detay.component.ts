import { Component, OnInit } from '@angular/core';
import { HaberserviceService } from "../haberservice.service";
import { Observable } from "rxjs";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-haber-detay',
  templateUrl: './haber-detay.component.html',
  styleUrls: ['./haber-detay.component.css']
})
export class HaberDetayComponent implements OnInit {

  haber: Object;

  constructor(private HaberService: HaberserviceService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.haber = params.id);
   }

  ngOnInit() {
    this.HaberService.getHaberDetay(this.haber).subscribe(
      data => this.haber = data
    );
  }

}
