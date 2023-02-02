import { Component } from '@angular/core';
import { TrainerService } from 'src/app/services/trainer.service';
/**
 * This component represents the navbar
 */
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: []
})
export class NavbarComponent {
  constructor(
    private readonly trainerService: TrainerService,
  ) { }

  public get trainerName(): string | undefined {
    return this.trainerService.trainer?.username;
  }

}
