// Exemplo real de uso de classe, como validador de CPF

// Iremos exportar a classe como default
export default class ValidaCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, "cpfLimpo", {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, ""),
    });
  }
  // Quando não usamos a palavra 'this' em um metódo, significa que podemos deixar o metodo estatico
  static criaDigito(cpfSemDigito) {
    const cpfArray = Array.from(cpfSemDigito);
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((acc, value) => {
      acc += regressivo * Number(value);
      regressivo--;
      return acc;
    }, 0);
    const digito = 11 - (total % 11);
    return digito > 9 ? "0" : String(digito);
  }
  geraNovoCpf() {
    const cpfSemDigito = this.cpfLimpo.slice(0, -2);
    const digito1 = ValidaCPF.criaDigito(cpfSemDigito);
    const digito2 = ValidaCPF.criaDigito(cpfSemDigito + digito1);
    const novoCpf = cpfSemDigito + digito1 + digito2;
    return novoCpf === this.cpfLimpo;
  }
  sequencia() {
    return this.cpfLimpo[0].repeat(11) === this.cpfLimpo;
  }
  valida() {
    if (!this.cpfLimpo) return false;
    if (typeof this.cpfLimpo !== "string") return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.sequencia()) return false;
    return this.geraNovoCpf();
  }
}
