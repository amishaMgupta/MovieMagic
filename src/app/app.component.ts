import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  myControl = new FormsModule();
  options: string[] = ['One', 'Two', 'Three'];

}
