import { Component } from '@angular/core';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  FaCloudSun = faCloudSun;
}
