import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})

export class ListadoComponent  {


  heroes: string[] = ['SpiderMan', 'IronMan', 'Hulk', 'Thor', 'Capitan America'];
    nombreHeroeBorrado: string = ""
  
   borrarHeroe(): any {

      const heroeBorrado = this.heroes.shift() || '';
      // console.log('borrando...', heroeBorrado);
      this.nombreHeroeBorrado = heroeBorrado;


            //OTRA MANERA DE HACERLO

      // let indice = this.heroes.indexOf(''); // obtenemos el indice
      //this.heroes.splice(indice, 1); // 1 es la cantidad de elemento a eliminar
      // console.log( this.heroes );
  }

}
