import { Component } from '@angular/core';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: []
})
export class NavbarComponent {
  // TODO Get trainer from trainer service
  // TODO import trainer service
  constructor(
    private readonly trainerService: TrainerService,
  ) { }


  public get trainerName(): string | undefined {
    return this.trainerService.trainer?.username;
  }

}
