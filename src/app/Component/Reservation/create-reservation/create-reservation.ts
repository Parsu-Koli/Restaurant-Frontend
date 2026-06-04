import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationService } from '../../../Services/ReservationServices/reservation-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-reservation',
  imports: [CommonModule,FormsModule],
  templateUrl: './create-reservation.html',
  styleUrl: './create-reservation.css',
})
export class CreateReservation {

  reservation: any = {
    reservationId: 0,
    customerId: 0,
    tableId: 0,
    numberOfGuests: 1,
    reservedDate: '',
    status: 'Pending',
    createdAt: new Date().toISOString()
  };

  constructor(
    private reservationService: ReservationService,
    private router: Router
  ) {}

  submitReservation() {

    this.reservationService.createReservation(this.reservation)
    .subscribe({
      next: (res) => {
        console.log("Reservation Created", res);
        alert("Reservation Created Successfully");

        this.router.navigate(['/reservations']);
      },
      error: (err) => {
        console.error(err);
        alert("Failed to create reservation");
      }
    });

  }
}
