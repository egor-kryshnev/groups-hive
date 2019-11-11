import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  logo: string = "assets/img/AmanLogo.png";

  constructor() { }

  ngOnInit() {
  }

  onLogo() {
    window.location.href = 'https://he.wikipedia.org/wiki/%D7%90%D7%92%D7%A3_%D7%94%D7%9E%D7%95%D7%93%D7%99%D7%A2%D7%99%D7%9F';
  }

}
