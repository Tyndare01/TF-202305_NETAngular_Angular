import { Component } from '@angular/core';

@Component({
  selector: 'app-demo01',
  templateUrl: './demo01.component.html',
  styleUrls: ['./demo01.component.scss']
})
export class Demo01Component {

  maVariable1!: string; // definite assigment assertion
  maVariable2: boolean = false;
  declare maVariable3: number; // ambient declaration

  maVariable4: null = null;
  maVariable5: undefined = undefined;

  marVariable6: any[] = ['Chaine de caractères', 42, true, null, undefined, {nom: 'toto', age: 42}];

  maVariable7:[string, number] = ['', 42];

  ngOnInit(): void {
    console.log("Création du composant");

    this.maVariable1 = "Como esta?";
    this.maVariable3 = 42;


   }

}
