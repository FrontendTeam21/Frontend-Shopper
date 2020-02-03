import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
 
  
  @ViewChild('column', {static: false}) columnRef: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.columnRef.nativeElement.classList.toggle('open');
  }

}
