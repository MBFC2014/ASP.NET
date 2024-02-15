import { Component, OnInit, inject } from '@angular/core';
import { VehicleCardComponent } from '../vehicle-card/vehicle-card.component';
import { AsyncPipe, NgFor } from '@angular/common';
import { VEHICLES } from '../../mock-db/vehicles';
import { Vehicle } from '../../models/vehicle';
import { VehicleService } from '../../services/vehicle.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-vehicle-list',
  standalone: true,
  imports: [NgFor, AsyncPipe, VehicleCardComponent],
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.css'
})
export class VehicleListComponent implements OnInit {  
  
  private vehicleService = inject(VehicleService);

  // vehicles: Vehicle[] = [];
  vehicles: Observable<Vehicle[]> = of([]);

  ngOnInit(): void {
    // get all the vehicles
    this.vehicles = this.vehicleService.getVehicles();
    // this.vehicleService.getVehicles()
    //   .subscribe(allVehicles => {
    //     this.vehicles = allVehicles;
    //   });
  }
}
