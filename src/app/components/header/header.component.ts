import { Component, OnInit } from '@angular/core';
import { HardCodedAuthenticationService } from 'src/app/services/hard-coded-authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public hardCodedauthService: HardCodedAuthenticationService) { }

  ngOnInit(): void {

  }

}
