import { Component } from '@angular/core';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: []
})
export class NavbarComponent {
  // TODO Get trainer from trainer service
  public get trainerName(): string | undefined {
    return this.trainerService.trainer?.username;
  }
  // TODO import trainer service
  constructor(
    private readonly trainerService: TrainerService,
  ) { }
}
