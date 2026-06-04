import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ReservationService } from '../../../Services/ReservationServices/reservation-service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-get-all-reservation',
  imports: [CommonModule,RouterModule],
  templateUrl: './get-all-reservation.html',
  styleUrl: './get-all-reservation.css',
})
export class GetAllReservation implements OnInit {

  Reservations: any[] = [];
  constructor(private reservationService: ReservationService,private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.reservationService.getAllReservations().subscribe({
      next: (data) => {
        this.Reservations = data;
        console.log('All Reservations:', this.Reservations);
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error fetching reservations:', error);
      }
    });
  }

}
