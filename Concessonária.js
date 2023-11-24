class Veiculo {

constructor(marca,modelo,ano){
    this.marca=marca;
    this.modelo=modelo;
    this.ano=ano;

    }

}
let marca=prompt("Marca do carro");//Nissan
let modelo=prompt("Modelo");//GT-R
let ano=parseInt(prompt("Ano do carro"));//2001
const veiculo1= new Veiculo(marca,modelo,ano)
alert(veiculo1.marca+"\n"+ veiculo1.modelo + "\n" + veiculo1.ano);
