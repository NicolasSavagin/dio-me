// Classe do Herói
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";

        if (this.tipo === "mago") {
            ataque = "magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo === "monge") {
            ataque = "artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "shuriken";
        } else {
            ataque = "ataque desconhecido";
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de uso
let heroi1 = new Heroi("Arthas", 30, "guerreiro");
let heroi2 = new Heroi("Merlin", 150, "mago");
let heroi3 = new Heroi("Lee", 40, "monge");
let heroi4 = new Heroi("Ryu", 25, "ninja");

// Chamando o método atacar
heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();