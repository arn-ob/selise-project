import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  

  navToggle() {
    
    let btn = document.getElementById('menuBtn');
    let nav = document.getElementById('menu');

    btn?.classList.toggle('open');
    nav?.classList.toggle('flex');
    nav?.classList.toggle("hidden");

  }


}
