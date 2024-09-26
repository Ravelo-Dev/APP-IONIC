import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-traductor',
  templateUrl: './traductor.page.html',
  styleUrls: ['./traductor.page.scss'],
})
export class TraductorPage implements OnInit {

  private Uno_A_nueve: string[] = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
  private Diez_A_diecinueve: string[] = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];
  private Veinte_A_noventa: string[] = ['', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
  private Cien_A_Novecientos: string[] = ['', 'cien', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];

  constructor() { }

  convertia_A_palabra(num: number): string {
    if (num === 0) return 'cero';
    if (num < 10) return this.Uno_A_nueve[num];
    if (num < 20) return this.Diez_A_diecinueve[num - 10];
    if (num < 100) return this.Veinte_A_noventa[Math.floor(num / 10)] + (num % 10 !== 0 ? ' y ' + this.Uno_A_nueve[num % 10] : '');
    if (num < 1000) return this.Cien_A_Novecientos[Math.floor(num / 100)] + (num % 100 !== 0 ? ' ' + this.convertia_A_palabra(num % 100) : '');
    if (num === 1000) return 'mil';
    return '';
  }

  numero: number = 0;
  palabra: string = '';

  convertirNumero() {
    this.palabra = this.convertia_A_palabra(this.numero);
  }

  ngOnInit() {
  }

}
