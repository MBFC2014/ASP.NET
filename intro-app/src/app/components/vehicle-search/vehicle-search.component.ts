import { Component, OnInit, inject } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable, of, startWith} from 'rxjs';
import { Vehicle } from '../../models/vehicle';
import { VehicleCardComponent } from '../vehicle-card/vehicle-card.component';
import { FilterByYearPipe } from '../../pipes/filter-by-year.pipe';

@Component({
  selector: 'app-vehicle-search',
  standalone: true,
  imports: [CommonModule, FormsModule, FilterByYearPipe, VehicleCardComponent],
  templateUrl: './vehicle-search.component.html',
  styleUrl: './vehicle-search.component.css'
})
export class VehicleSearchComponent implements OnInit {
  private vehicleService = inject(VehicleService);
  public selectedYear: number = 0;
  public vehicles: Observable<Vehicle[]> = of([] as Vehicle[]);

  ngOnInit(): void {
    this.vehicles = this.vehicleService.getVehicles().pipe(
      startWith([] as Vehicle[]) // Provides a default empty array
    );
  }

}



