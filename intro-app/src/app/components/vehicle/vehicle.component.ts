import { Component, Inject, OnInit, inject } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { Vehicle } from '../../models/vehicle';
import { NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-vehicle',
  standalone: true,
  imports: [NgIf],
  templateUrl: './vehicle.component.html',
  styleUrl: './vehicle.component.css'
})
export class VehicleComponent implements OnInit {
  
  private vehicleService = inject(VehicleService);
  private route = inject(ActivatedRoute);

  public vehicle: Vehicle | null = null;

  ngOnInit(): void {    
    this.getVehicle();
  }

  public getVehicle(): void {
    this.vehicle = this.vehicleService.getCurVehicle();

    if(!this.vehicle) {
      this.route.paramMap.pipe(
        switchMap(params => {
          let vehicleId = params.get('vehicleId');
          vehicleId = (vehicleId ? vehicleId : '-1');

          return this.vehicleService.getVehicle(vehicleId);
        })
      ).subscribe(vehicle => {
        this.vehicle = vehicle;
      });
    }
  }
}
