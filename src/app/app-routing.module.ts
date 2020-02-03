import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { CrearProductoComponent } from './componentes/crear-producto/crear-producto.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { FaqsComponent } from './componentes/faqs/faqs.component';
import { CreaCuentaComponent } from './componentes/crea-cuenta/crea-cuenta.component';


const routes: Routes = [
  {
    path:'', 
    component: InicioComponent,
    data: {rutas: [{ruta:'/',texto:'Inicio'}]}
   },
   {
    path:'carrito', 
    component: CarritoComponent,
    data: {rutas: [{ruta:'/',texto:'Inicio'},{ruta:'/carrito',texto:'Carrito'}]}
   },
   {
    path:'productos', 
    component: ProductosComponent,
    data: {rutas: [{ruta:'/',texto:'Inicio'},{ruta:'/productos',texto:'Productos'}]}
   },
   {
    path:'producto', 
    component: ProductoComponent,
    data: {rutas: [{ruta:'/',texto:'Inicio'},{ruta:'/producto',texto:'Producto'}]}
   },
   {
    path:'crear-producto', 
    component: CrearProductoComponent,
    data: {rutas: [{ruta:'/',texto:'Inicio'},{ruta:'/perfil',texto:'Perfil'},{ruta:'/crear-producto',texto:'Crear Producto'}]}
   },
   {
    path:'perfil', 
    component: PerfilComponent,
    data: {rutas: [{ruta:'/',texto:'Inicio'},{ruta:'/perfil',texto:'Perfil'}]}
   },
   {
    path:'contacto', 
    component: ContactoComponent,
    data: {rutas: [{ruta:'/',texto:'Inicio'},{ruta:'/contacto',texto:'Contácto'}]}
   },
   {
    path:'nosotros', 
    component: NosotrosComponent,
    data: {rutas: [{ruta:'/',texto:'Inicio'},{ruta:'/nosotros',texto:'Nosotros'}]}
   },
   {
    path:'faqs', 
    component: FaqsComponent,
    data: {rutas: [{ruta:'/',texto:'Inicio'},{ruta:'/faqs',texto:'FAQs'}]}
   },
   {
    path:'crear-cuenta', 
    component: CreaCuentaComponent,
    data: {rutas: [{ruta:'/',texto:'Inicio'},{ruta:'/crear-cuenta',texto:'Crear cuenta'}]}
   }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
