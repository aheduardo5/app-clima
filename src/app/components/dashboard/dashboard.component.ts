import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClimaService } from '../../services/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  urlImagen: string;
  ciudad = '';
  ciudadFront = '';
  temperatura = 0;
  humedad = 0;
  clima = '';
  query = false;
  loading = false;
  mostrarError = false;
  subscription: Subscription;
  constructor(private _climaService: ClimaService) {
    this.urlImagen = 'https://cdn-icons-png.flaticon.com/512/1116/1116453.png';
    this.ciudad = '';
    this.subscription = new Subscription();
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    this.subscription.unsubscribe();
    //Add 'implements OnDestroy' to the class.
  }
  obtenerClima() {
    this.loading = true;
    this.subscription = this._climaService.getClima(this.ciudad).subscribe(
      (data) => {
        this.query = true;
        this.loading = false;
        this.ciudadFront = data.name;
        this.temperatura = data.main.temp - 273;
        this.humedad = data.main.humidity;
        this.clima = data.weather[0].main;
      },
      (error) => {
        this.loading = false;
        this.mostrarError = true;
        this.query = false;
        setTimeout(() => {
          this.mostrarError = false;
        }, 3000);
      }
    );
  }
}
