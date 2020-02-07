import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MensajesService } from 'src/app/servicios/mensajes.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductsService } from 'src/app/servicios/productos.service';
import { Producto } from 'src/app/models/producto.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  
  texto: string;
  tipoMensaje: string;
  subscripMensaje: Subscription;
  showMensaje = false;
  timer: any;

  productos: Array<Producto>;

  formSearch: FormGroup;
  @ViewChild('search', {static: false}) searchRef: ElementRef;

  showSpinner = true;

  constructor(private mensajesService: MensajesService,
              private productosService: ProductsService) { }

  ngOnInit() {
    this.subscripMensaje = this.mensajesService.isMensajeIn
                                    .subscribe((data:any)=>{
                                        window.clearTimeout(this.timer);
                                        this.showMensaje = true;
                                        this.timer = setTimeout(()=>{
                                          this.showMensaje = false;
                                        }, 5000);
                                        this.texto = data.texto;
                                        this.tipoMensaje = data.tipoMensaje;
                                      },(err:any)=>{
                                        console.log(err);
                                      })
    this.formSearch = new FormGroup({
      search: new FormControl('')
    });
    this.onSearch();
  }

  loadProductos() {
    this.productosService.getProducts()
              .subscribe((res:any)=>{
                  this.showSpinner = false;
                  this.productos = res.productos;
                },(err:any)=>{
                  this.showSpinner = false;
                  console.log(err);
                })
  }

  


  onSearch() {
    this.formSearch.get('search').valueChanges
                      .subscribe(nombre =>{
                        this.productos = [];
                        this.showSpinner = true;
                        if (nombre !== '') {
                          this.productosService.getProducts()
                                    .subscribe((res:any)=>{
                                        this.showSpinner = false;
                                        this.productos = res.productos;
                                      },(err:any)=>{
                                        this.showSpinner = false;
                                        console.log(err);
                                      })
                        } else {
                          this.showSpinner = false;
                          this.loadProductos()
                        }
                      })
  }

  /* showSearch() {
    this.searchRef.nativeElement.classList.add('open');
  } */

  openSideCarrito() {
    document.getElementById("mySidenav").style.width = "400px";
/*     document.getElementById("main").style.marginRight = "250px";   
 */  }
  
  closeSideCarrito() {
    document.getElementById("mySidenav").style.width = "0";
/*     document.getElementById("main").style.marginRight = "0";
 */  }
  openSidePerfil() {
    document.getElementById("mySidePerfil").style.width = "400px";
/*     document.getElementById("main").style.marginRight = "250px";   
 */  }
  
  closeSidePerfil() {
    document.getElementById("mySidePerfil").style.width = "0";
/*     document.getElementById("main").style.marginRight = "0";
 */  }

}
