import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NavComponent } from './componentes/nav/nav.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { CrearProductoComponent } from './componentes/crear-producto/crear-producto.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { SpinnerComponent } from './componentes/spinner/spinner.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { BreadcrumbComponent } from './componentes/breadcrumb/breadcrumb.component';
import { FaqsComponent } from './componentes/faqs/faqs.component';
import { CreaCuentaComponent } from './componentes/crea-cuenta/crea-cuenta.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavComponent,
    CarritoComponent,
    ProductosComponent,
    ProductoComponent,
    CrearProductoComponent,
    PerfilComponent,
    SpinnerComponent,
    FooterComponent,
    ContactoComponent,
    NosotrosComponent,
    BreadcrumbComponent,
    FaqsComponent,
    CreaCuentaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
