function validaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function () {
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}

//se der erro return false mas se chegar até o final return true,o CPF é válido
//aqui não tenho acesso ao cpfEnviado então vou usar o cpfLimpo que é a propriedade definida dentro do object (usar this)
validaCPF.prototype.valida = function () {
    if (this.cpfLimpo === undefined) return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    const novoCpf = cpfParcial + digito1 + digito2;

    return novoCpf === this.cpfLimpo;
};

//cpfParcial pq pode receber os 9 digitos ou os 9 digitos + 1 digito
validaCPF.prototype.criaDigito = function (cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, valor) => {
        ac += (regressivo * Number(valor));
        regressivo--;
        return ac;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
};

//se o primeiro numero do cpf for igual o cpfLimpo quer dizer que repetiu o primeiro numero e é uma sequencia
validaCPF.prototype.isSequencia = function (){
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
}

const cpf = new validaCPF('268.831.430-09');

if(cpf.valida()){
    console.log('CPF válido');
} else {
    console.log('CPF inválido')
}