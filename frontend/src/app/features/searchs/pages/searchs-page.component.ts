import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchsCardComponent } from '../components/searchs-card.component';
import { SearchsService } from '../../../core/services/searchs.service';
import { Room } from '../../../core/models/room.model';

@Component({
  selector: 'app-searchs-page',
  imports: [CommonModule,FormsModule,SearchsCardComponent],
  templateUrl: './searchs-page.component.html',
  styleUrl: './searchs-page.component.scss',
  standalone:true,
})
export class SearchsPageComponent {
  
  rooms: Room[] = [];

  constructor(private readonly searchsService: SearchsService) {}

  onSearch(filters: any) {
    this.searchsService.searchAvailableRooms(filters).subscribe({
      next: (rooms) => {
        this.rooms = rooms;
      },
      error: (err) => {
        console.error('Error buscando habitaciones:', err);
      }
    });
  }

}
