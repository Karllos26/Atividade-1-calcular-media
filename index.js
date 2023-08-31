"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
// Função para calcular a média das notas
function calcularMedia(notas) {
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    return soma / notas.length;
}
// Função principal
function main() {
    // Solicitando o nome do aluno
    const nome = prompt('Digite o nome do aluno: ');
    const notas = [];
    // Solicitando as 4 notas do aluno
    for (let i = 0; i < 4; i++) {
        const nota = parseFloat(prompt(`Digite a nota ${i + 1} (0 a 10): `));
        if (isNaN(nota) || nota < 0 || nota > 10) {
            console.log('Nota inválida. Por favor, digite uma nota entre 0 e 10.');
            i--; // Revisitar a mesma iteração para obter uma nota válida
            continue;
        }
        notas.push(nota);
    }
    // Calcular a média das notas
    const media = calcularMedia(notas);
    // Criar o objeto aluno
    const aluno = {
        nome,
        notas,
        media,
    };
    // Exibir o objeto aluno no console
    console.log(aluno);
}
main();
