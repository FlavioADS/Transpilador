//Flávio de Araújo Silva - ADO

class flamingo {

  comer: String = 'crustáceos';
  cor : String = 'Rosa';
  voar: number = 0; 
  dormir: number = 0;
  correr: number = 0;

  constructor(novoComer) {
    this.comer = novoComer;
  }

  novaCor(novaCor: String){
    this.cor = novaCor;
  }

  tempodevooparaacharninho(voar?: number) {
    if (voar === undefined) {
      console.log("Não achei um ninho ;-;"); //fiz esses "consoles.logs" para me ajudar a entender oq estava acontecendo
      this.voar += 10;
    } else {
      console.log("Achei um ninho!");
      this.voar = 0;
    }
    console.log("Tempo de voo: ", this.voar);
  }

  tempodesono(dormir?: number) {
    if (dormir === undefined) {
      console.log("Não dormi o suficiente, tenho que dormir mais um pouco.");
      this.dormir += 10;
    } else {
      console.log("Dormi bem!");
      this.dormir = 0;
    }
    console.log("Tempo de descanso: ", this.dormir);
  }

  Cacarcomida(correr?: number) {
    if (correr === undefined) {
      console.log("Não consegui pegar a minha presa");
      this.correr  += 10;
    } else {
      console.log("Peguei");
      this.correr = 0;
    }
    console.log("Tempo de corrida : ", this.correr);
  }
}

const euflamingo = new flamingo ('Peixes');
const novaCor = new flamingo ('cinza');

console.log(euflamingo.cor);


euflamingo.tempodevooparaacharninho();
euflamingo.tempodevooparaacharninho(); // aqui eu repeti para testar se estava incrementando 10 como solicitei nos objetos.
euflamingo.tempodevooparaacharninho(20);


euflamingo.tempodesono();
euflamingo.tempodesono();
euflamingo.tempodesono(50);

euflamingo.Cacarcomida();
euflamingo.Cacarcomida();
euflamingo.Cacarcomida(80);
