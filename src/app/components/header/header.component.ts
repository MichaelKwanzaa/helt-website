import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faBars, faClose} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isOpen: boolean = false;

  constructor(private router: Router){

  }

  hamburger = faBars;
  close = faClose;

  handleMenu(){
    this.isOpen = !this.isOpen;
  }

  goToLink(link: string = ""){
    if(!link){
      this.router.navigate(["/"])
    } else {
      this.router.navigate([`/${link}`])
    }

    this.isOpen = false;
  }


}
