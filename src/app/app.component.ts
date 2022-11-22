import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'google-clone';

  inputHasFocus: boolean = false;

  changeInputHasFocus(status: boolean){
    this.inputHasFocus = status;
  }

}
