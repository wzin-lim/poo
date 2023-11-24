class Estudante {

    constructor(Nome,Matricula){
        this.Nome=Nome;
        this.Matricula=Matricula;
        
        }
    }
    let Nome=(prompt("Digite o nome"));
let Matricula=(prompt("Digite a matricula"));
const Estudante1= new Estudante(Nome,Matricula)
alert(Estudante1.Nome+"\n"+Estudante1.Matricula)