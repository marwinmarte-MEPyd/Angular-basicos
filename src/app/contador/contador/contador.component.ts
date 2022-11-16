import { Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        
        <H1> {{ title }}</H1>
        <h3> La base es de: <strong> {{ base }}</strong></h3>

        <button (click)=" acumular(+ base) "> +{{base}}</button>

        <span>{{ numero }}</span>

        <button (click)=" acumular(- base) "> -{{base}}</button>
 
    `
})

export class ContadorComponent {
    
    title: string = 'Contador App';
    numero: number = 45;
    base: number = 5;

    acumular( valor: number) {
        this.numero += valor;
    }; 

}