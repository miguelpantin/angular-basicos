import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})

export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor', 'Cap. America']
  heroeBorrado: string = ''

  borrarHeroe(): void {
    this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroeBorrado);
    
  }
}
