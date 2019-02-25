import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Coracao } from './../shared/coracao.model';


@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  @Input() public tentativas: number

  public corasoes: Coracao[] = [
    new Coracao(true), new Coracao(true),new Coracao(true)
  ]


  constructor() {
    
   }

   ngOnChanges(){
     //this.tentativas
     //this.caracoes.length
     if(this.tentativas !== this.corasoes.length) {
       let indice = this.corasoes.length - this.tentativas

       this.corasoes[indice - 1].cheio = false
     }

   }

  ngOnInit() {
    
  }

}
