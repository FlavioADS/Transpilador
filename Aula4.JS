class Flamingo {
    constructor(novoComer = 'crustáceos', novaCor = 'Rosa') {
        this.comer = novoComer;
        this.cor = novaCor;
        this.voar = 0;
        this.dormir = 0;
        this.correr = 0;
    }

    setComida(novaComida) {
        this.comer = novaComida;
    }

    novaCor(novaCor) {
        this.cor = novaCor;
    }

    tempodevooparaacharninho(voar) {
        if (voar === undefined) {
            console.log("Não achei um ninho ;-;");
            this.voar += 10;
        } else {
            console.log("Achei um ninho!");
            this.voar = 0;
        }
        console.log("Tempo de voo: ", this.voar);
    }

    tempodesono(dormir) {
        if (dormir === undefined) {
            console.log("Não dormi o suficiente, tenho que dormir mais um pouco.");
            this.dormir += 10;
        } else {
            console.log("Dormi bem!");
            this.dormir = 0;
        }
        console.log("Tempo de descanso: ", this.dormir);
    }

    cacarComida(correr) {
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

const euflamingo = new Flamingo('Peixes', 'Cinza');

euflamingo.novaCor('Cinza');
euflamingo.setComida('Peixes');

console.log("Nova cor: " + euflamingo.cor);
console.log("O que está comendo atualmente?: " + euflamingo.comer);

euflamingo.tempodevooparaacharninho();
euflamingo.tempodevooparaacharninho();
euflamingo.tempodevooparaacharninho(20);
euflamingo.tempodesono();
euflamingo.tempodesono();
euflamingo.tempodesono(50);
euflamingo.cacarComida();
euflamingo.cacarComida();
euflamingo.cacarComida(80);
