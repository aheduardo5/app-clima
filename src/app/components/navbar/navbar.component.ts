import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  nombreSitio: string;
  constructor() { 
    this.nombreSitio = 'App Clima';
  }

  ngOnInit(): void {
  }

}
