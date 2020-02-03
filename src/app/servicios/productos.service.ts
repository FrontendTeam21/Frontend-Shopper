import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Producto } from '../models/producto.model';
import { MensajesService } from './mensajes.service';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  urlProductos = environment.urlProductos;
  navbarCartCount = 0;
  
  products: any;

  constructor(private http: HttpClient,
              private mensajesService: MensajesService) {  }

  getProducts() {
    return this.http.get(this.urlProductos)
                  .pipe(
                    map((res: any)=>{
                      return res;
                    })
                  )
  }

  getProduct(id) {
    return this.http.get(this.urlProductos + `/${id}`)
                  .pipe(
                    map((res: any)=>{
                      return res;
                    })
                  )
  }

  getProductName(nombre) {
    return this.http.get(this.urlProductos + '/search/' + nombre)
                  .pipe(
                    map((res:any)=>{
                      return res;
                    })
                  )
  }
  getProductCategoriaGenero(categoriaGenero) {
    return this.http.get(this.urlProductos + '/search/' + categoriaGenero)
                  .pipe(
                    map((res:any)=>{
                      return res;
                    })
                  )
  }
  getProductCategoriaProducto(categoriaProducto) {
    return this.http.get(this.urlProductos + '/search/' + categoriaProducto)
                  .pipe(
                    map((res:any)=>{
                      return res;
                    })
                  )
  }
  getProductCategoriaMarca(categoriaMarca) {
    return this.http.get(this.urlProductos + '/search/' + categoriaMarca)
                  .pipe(
                    map((res:any)=>{
                      return res;
                    })
                  )
  }
  getProductCategoriaColor(categoriaColor) {
    return this.http.get(this.urlProductos + '/search/' + categoriaColor)
                  .pipe(
                    map((res:any)=>{
                      return res;
                    })
                  )
  }
  getProductCategoriaTalla(categoriaTalla) {
    return this.http.get(this.urlProductos + '/search/' + categoriaTalla)
                  .pipe(
                    map((res:any)=>{
                      return res;
                    })
                  )
  }
  getProductPrecio(precio) {
    return this.http.get(this.urlProductos + '/search/' + precio)
                  .pipe(
                    map((res:any)=>{
                      return res;
                    })
                  )
  }
  


  postProduct(producto) {
    return this.http.post(this.urlProductos, producto)
                  .pipe(
                    map((res: any)=>{
                      return res;
                    })
                  )
  }

  // Adding new Product to cart db if logged in else localStorage
	addToCart(data: Producto): void {
		let a: Producto[];

		a = JSON.parse(localStorage.getItem('avct_item')) || [];

		a.push(data);
		this.mensajesService.wait('Añadiendo producto al carrito', 'Producto añadido al carrito');
		setTimeout(() => {
			localStorage.setItem('avct_item', JSON.stringify(a));
			this.calculateLocalCartProdCounts();
		}, 500);
	}

	// Removing cart from local
	removeLocalCartProduct(product: Producto) {
		const products: Producto[] = JSON.parse(localStorage.getItem('avct_item'));

		for (let i = 0; i < products.length; i++) {
			if (products[i].productId === product.productId) {
				products.splice(i, 1);
				break;
			}
		}
		// ReAdding the products after remove
		localStorage.setItem('avct_item', JSON.stringify(products));

		this.calculateLocalCartProdCounts();
	}

	// Fetching Locat CartsProducts
	getLocalCartProducts(): Producto[] {
		const products: Producto[] = JSON.parse(localStorage.getItem('avct_item')) || [];

		return products;
	}

	// returning LocalCarts Product Count
	calculateLocalCartProdCounts() {
		this.navbarCartCount = this.getLocalCartProducts().length;
	}


}




	
