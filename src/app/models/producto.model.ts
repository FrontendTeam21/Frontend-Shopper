export class Producto {
    imagePath: string;
    nombre: string;
    categoriaGenero: string;
    categoriaProducto: string;
    categoriaMarca: string;
    categoriaColor: string;
    categoriaTalla: string;
    precio: string;
    description: string;
    productId: string;

    constructor(imagePath, nombre, categoriaGenero, categoriaProducto, categoriaMarca, categoriaColor, categoriaTalla, description, precio, productId) {
        this.imagePath = imagePath;
        this.nombre = nombre;
        this.categoriaGenero = categoriaGenero;
        this.categoriaProducto = categoriaProducto;
        this.categoriaMarca = categoriaMarca;
        this.categoriaColor = categoriaColor;
        this.categoriaTalla = categoriaTalla;
        this.precio = precio;
        this.description = description;
        this.productId = productId;
    }
}