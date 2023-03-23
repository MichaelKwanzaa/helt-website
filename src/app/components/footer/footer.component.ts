import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedin } from '@fortawesome/fontawesome-free-brands';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private router: Router){

  }
  envelope = faEnvelope;
  twitter = faTwitter;
  linkedIn = faLinkedin;


  goToLink(link: string = ""){
    if(!link){
      this.router.navigate(["/"])
    } else {
      this.router.navigate([`/${link}`])
    }
  }

}
