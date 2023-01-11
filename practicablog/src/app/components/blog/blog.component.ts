import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/interfaces/blog.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {

  arrImagenes: any[] = [];
  arrNoticia: Noticia [] = []

  resultado: string = "";
  
  title:string = "";
  url: string = "";
  body:string = "";
  data:number = 0;

  imagenActual1: number = 0;
  imagenActual2: number = 1;

  constructor() {
    
    this.arrNoticia = [
      { title: 'Sube el precio de la bellota ', url: './assets/images/encina.jpg', body:'En los días previos a las navidades es habitual que aumente el costo de los productos típicos que comemos en casa o en restaurantes, como el marisco, el cordero o el pavo. Y lo mismo ocurre con el precio del jamón de bellota, pero con la diferencia de que la subida no es sólo estacional. Ha incrementado más aún respecto al año pasado, siendo prácticamente inaccesible para muchas familias, como si se tratase de un artículo de lujo.', data: 2015},
      { title: 'Sube fuertemente el gasto en la recolección de cocos', url: './assets/images/palmera.jpg', body:'La lluvia es uno de los principales factores que influyen en la cosecha de coco. Más lluvia significa más cocos. Sin embargo, el clima en Tailandia este año ha sido bastante caluroso y seco. Prácticamente no hubo fuertes lluvias hasta el mes de mayo y muchas zonas productoras entraron en la estación cálida a finales de marzo. Algunas zonas disfrutaron de un poco de lluvia, pero la mayoría de las regiones de cultivo sufrieron por la sequía. Los canales de riego que discurren entre los cocoteros se secaron rápidamente, impidiendo que los frutos crecieran con normalidad', data: 2018}
    ],

    this.arrImagenes = [
      { url: './assets/images/palmera.jpg', title: 'SUBE LA PRODUCCIÓN DE COCOS A NIVEL MUNDIAL'},
      { url: './assets/images/pino.jpg', title: 'SUBE LA PRODUCCIÓN DE PIÑAS A NIVEL MUNDIAL'},
      { url: './assets/images/roble.jpg', title: 'SUBE LA PRODUCCIÓN DE BELLOTAS A NIVEL MUNDIAL'},
      { url: './assets/images/encina.jpg', title: 'SUBE LA PRODUCCIÓN DE BELLOTAS A NIVEL MUNDIAL'},
    ]
  }

  ngOnInit(): void {
    this.cargarDatos()
  }

  cargarDatos(): void {
    this.resultado = "";
    this.arrNoticia.forEach(Noticia => this.resultado += `<li>${Noticia.title} : ${Noticia.url} : ${Noticia.body} : ${Noticia.data}</li>`)

  }

  guardarDatos() {
    if (this.title !== "" && this.data !== 0) {
      let posicion = this.arrNoticia.findIndex(Noticia => Noticia.title === this.title)

      if (posicion === -1) {
        let newNoticia: Noticia = {
          title:this.title,
          url: this.url,
          body:this.body,
          data:this.data,
        }
        this.arrNoticia.push(newNoticia);
        this.data++;
        this.cargarDatos()
        this.title = "";
        this.url = "";
        this.body= "";
        this.data= 0;
      }
      else {
        alert('Usuario ya registrado o duplicado')
      }
    } else {
      alert('Los campos no pueden estar vacios')
    }


  }

  cambiarImagen1($event: any): void {
    if ($event.target.innerText === 'NEXT') {
      this.imagenActual1 = (this.imagenActual1 === this.arrImagenes.length - 1) ? 0 : this.imagenActual1 + 1
    } else {
            this.imagenActual1 = (this.imagenActual1 === 0) ? this.arrImagenes.length - 1 : this.imagenActual1 - 1
    }
  }

  cambiarImagen2($event: any): void {
    if ($event.target.innerText === 'NEXT') {
      this.imagenActual2 = (this.imagenActual2 === this.arrImagenes.length - 1) ? 0 : this.imagenActual2 + 1
    } else {
            this.imagenActual2 = (this.imagenActual2 === 0) ? this.arrImagenes.length - 1 : this.imagenActual2 - 1
    }
  }

  

}