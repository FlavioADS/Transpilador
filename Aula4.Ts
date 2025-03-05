//Flávio de Araújo Silva - ADO

class Flamingo {
  comer: string;
  cor: string;
  voar: number;
  dormir: number;
  correr: number;

  constructor(comer: string = 'crustáceos', cor: string = 'Rosa') {
      this.comer = comer;
      this.cor = cor;
      this.voar = 0;
      this.dormir = 0;
      this.correr = 0;
  }

  mudarCor(novaCor: string) {
      this.cor = novaCor;
  }

  voarParaAcharNinho(voar?: number) {
      if (voar === undefined) {
          console.log("Não achei um ninho ;-;");
          this.voar += 10;
      } else {
          console.log("Achei um ninho!");
          this.voar = 0;
      }
      console.log("Tempo de voo: ", this.voar);
  }

  dormirTempo(dormir?: number) {
      if (dormir === undefined) {
          console.log("Não dormi o suficiente, tenho que dormir mais um pouco.");
          this.dormir += 10;
      } else {
          console.log("Dormi bem!");
          this.dormir = 0;
      }
      console.log("Tempo de descanso: ", this.dormir);
  }

  correrParaCacar(correr?: number) {
      if (correr === undefined) {
          console.log("Não consegui pegar a minha presa");
          this.correr += 10;
      } else {
          console.log("Peguei");
          this.correr = 0;
      }
      console.log("Tempo de corrida: ", this.correr);
  }
}

// Testando a classe
const meuFlamingo = new Flamingo('Peixes', 'Cinza');

meuFlamingo.mudarCor('Vermelho');
meuFlamingo.voarParaAcharNinho();
meuFlamingo.dormirTempo();
meuFlamingo.correrParaCacar();
