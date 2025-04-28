import { Component, Output } from '@angular/core';
import { Searchs } from '../../../core/models/searchs.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RoomType } from '../../../core/models/room.model';
import { EventEmitter } from '@angular/core'; // ← BIEN ✅

@Component({
  selector: 'app-searchs-card',
  imports: [FormsModule, CommonModule],
  templateUrl: './searchs-card.component.html',
  styleUrl: './searchs-card.component.scss',
  standalone:true,
})
export class SearchsCardComponent {
  filters: Searchs = {}; // ← Usamos tu interface `Searchs` correctamente
  roomTypes = Object.values(RoomType); // Para llenar el combo de tipos


  @Output() searchSubmitted = new EventEmitter<any>();

  submit() {
    const cleanFilters = this.prepareFilters(this.filters);
    this.searchSubmitted.emit(cleanFilters);
  }

  private prepareFilters(filters: Searchs): any {
    const clean: any = {};

    if (filters.location) clean.location = filters.location;
    if (filters.minPrice != null) clean.minPrice = filters.minPrice;
    if (filters.maxPrice != null) clean.maxPrice = filters.maxPrice;
    if (filters.roomType) clean.roomType = filters.roomType;
    if (filters.checkIn) clean.checkIn = filters.checkIn.toISOString();
    if (filters.checkOut) clean.checkOut = filters.checkOut.toISOString();
    if (filters.hotelId) clean.hotelId = filters.hotelId;

    return clean;
  }
}




