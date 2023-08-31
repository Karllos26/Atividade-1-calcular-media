import PromptSync from "prompt-sync"
const prompt = PromptSync()
interface Aluno {
  nome: string;
  notas: number[];
  media: number;
}

function calcularMedia(notas: number[]): number {
  const soma = notas.reduce((acc, nota) => acc + nota, 0);
  return soma / notas.length;
}

function main() {

  const nome = prompt('Digite o nome do aluno: ');

  const notas: number[] = [];

  for (let i = 0; i < 4; i++) {
    const nota = parseFloat(prompt(`Digite a nota ${i + 1} (0 a 10): `));

    if (isNaN(nota) || nota < 0 || nota > 10) {
      console.log('Nota inválida. Por favor, digite uma nota entre 0 e 10.');
      i--;
      continue;
    }

    notas.push(nota);
  }

  const media = calcularMedia(notas);

  const aluno: Aluno = {
    nome,
    notas,
    media,
  };

  console.log(aluno);
}
main();