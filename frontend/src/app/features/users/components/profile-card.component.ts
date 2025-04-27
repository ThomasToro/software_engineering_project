import { Component, Input } from '@angular/core';
import { User } from '../../../core/models/user.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-card',
  imports: [CommonModule, FormsModule],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss'
})
export class ProfileCardComponent {
  @Input() user: User | null = null; // Inicializamos el usuario como nulo




}
