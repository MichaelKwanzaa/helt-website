import { faMale, faBuilding, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  male = faMale;
  buildings = faBuilding
  group = faPeopleGroup
  videoSourceOne = "../../../assets/videos/5.mp4"
  videoSourceTwo = "../../../assets/videos/4.mp4"
  videoSourceThree = "../../../assets/videos/1.mp4"

  downloadNow(){
      window.open("https://docs.google.com/forms/d/1d2223wY3EVjFezZIBB_8y9Z9KxMCTTOcZAGRqIF1ngY/", "_blank");
  }

}
