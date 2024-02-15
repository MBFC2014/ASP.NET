import { Component, Input, inject } from '@angular/core';
import { Vehicle } from '../../models/vehicle';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-vehicle-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './vehicle-card.component.html',
  styleUrl: './vehicle-card.component.css'
})
export class VehicleCardComponent {
  private router = inject(Router);
  private vehicleService = inject(VehicleService);

  @Input() vehicle: Vehicle | null = null;

  public select(vehicle: Vehicle){
    // place into vehicle service
    this.vehicleService.select(vehicle);

    // navigate to vehicle page
    this.router.navigate(['/vehicle/' + vehicle.id]);
  }

}
