import { Component } from "@angular/core";
@Component({
    selector:'app-cliente-inserir',
    templateUrl:'./cliente-inserir.component.html'
})

export class ClienteinserirComponent{
    nome = "";
    fone = "";
    email = "";

    onAdicionarCliente(){
        console.log('insereindo cliente...');
        console.log(this.nome);
    }
}


