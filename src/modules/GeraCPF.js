// Importamos a classe do modulo que criamos anteriormente
import ValidaCPF from "./ValidaCPF";

// Iremos criar uma classe para gerar os CPF
// Necessário exportar a classse como default, já que ela é única no arquivo
export default class GeraCPF {
  // Definimos os valores minimos e maximos para os numeros criados aleatoriamente
  rand(min = 100000000, max = 999999999 ) {
    // Metodo padrão criado para gerar os numeros
    // Usamos o metodo String() para garantir que o JS vai trabalhar, pois o número
    // iniciado por '0' é uma string na linguagem de programação
    return String(Math.floor(Math.random() * (max - min) + min));
  }

// Metodo criado que irá formatar o CPF
  formatado(cpf) {
    // Fatiamos o cpf e adicionamos os pontos e o traço a cada intervalo de número
    return (
      cpf.slice(0, 3) + '.' +
      cpf.slice(3, 6) + '.' +
      cpf.slice(6, 9) + '-' +
      cpf.slice(9, 11)
    )
  }
  
  // Metodo criado que irá gerar o CPF
  geraNovoCpf() {
    const cpfSemDigito = this.rand();
    const digito1 = ValidaCPF.criaDigito(cpfSemDigito);
    const digito2 = ValidaCPF.criaDigito(cpfSemDigito + digito1);
    const novoCpf = cpfSemDigito + digito1 + digito2;
    return this.formatado(novoCpf);
  }
}
