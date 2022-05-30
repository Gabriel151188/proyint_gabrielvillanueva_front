export class persona{
    id?: number;
    nombre: String;
    apellido: String;
    img: String;
    acercademi: String;

    constructor(nombre: String, apellido: String, img: String, acercademi: String ){   
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.acercademi = acercademi;
    }
}