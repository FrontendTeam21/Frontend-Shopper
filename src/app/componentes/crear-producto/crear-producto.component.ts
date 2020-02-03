import { Component, OnInit } from '@angular/core';
import { MensajesService } from 'src/app/servicios/mensajes.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl} from '@angular/forms';
import { Producto } from 'src/app/models/producto.model';
import { ProductsService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.scss']
})
export class CrearProductoComponent implements OnInit {

  formProducto: FormGroup;
  validacion = false;

  constructor(private productosService: ProductsService,
              private router: Router,
              private mensajesService: MensajesService) { }

  ngOnInit() {
    this.formProducto = new FormGroup({
      imagePath: new FormControl(''),
      nombre: new FormControl(''),
      categoriaGenero: new FormControl(''),
      categoriaProducto: new FormControl(''),
      categoriaMarca: new FormControl(''),
      categoriaColor: new FormControl(''),
      categoriaTalla: new FormControl(''),
      precio: new FormControl(''),
      descripcion: new FormControl(''),
      productId: new FormControl(''),
    })
  }

  sendProducto() {
    let producto: Producto = new Producto(
      this.formProducto.get('imagePath').value,
      this.formProducto.get('nombre').value,
      this.formProducto.get('categoriaGenero').value,
      this.formProducto.get('categoriaProducto').value,
      this.formProducto.get('categoriaMarca').value,
      this.formProducto.get('categoriaColor').value,
      this.formProducto.get('categoriaTalla').value,
      this.formProducto.get('precio').value,
      this.formProducto.get('descripcion').value,
      this.formProducto.get('productId').value,
      )
      
    this.productosService.postProduct(producto)
                  .subscribe((res:any)=>{
                      this.mensajesService.setMensaje(res.mensaje, 'Producto creado correctamente');
                      this.router.navigate(['/perfil']);
                    },(err:any)=>{
                      if(err.error.error !== undefined) {
                        this.mensajesService.setMensaje('Error al crear el producto', 'error');
                      } else {
                        this.mensajesService.setMensaje('Error de conexión con los servidores, inténtelo más tarde', 'warning');
                      }
                      console.log(err);
                    })
  }

  showValidacion() {
    this.validacion = true;
  }

}
