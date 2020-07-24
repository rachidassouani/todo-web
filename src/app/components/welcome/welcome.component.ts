import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from './../../services/welcome-data.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  username: string;
  welcomeMessage: string
  welcomeMessageFromService: string;

  constructor(
    private route: ActivatedRoute,
    private welcomeDataService: WelcomeDataService) { }

  ngOnInit(): void {
     this.username = this.route.snapshot.params['username'];
  }

  onGetWelcomeMessage() {
    this.welcomeDataService.executeHelloWordBeanService().subscribe(
      data => {
        this.welcomeMessageFromService = data.message;
      }
    );
  }
  onGetWelcomeMessageWithPathVariable() {
    this.welcomeDataService.executeHelloWorldServiceWithPathVariable(this.username)
      .subscribe(
        data => {
          this.welcomeMessageFromService = data.message;
      });
  }
}
