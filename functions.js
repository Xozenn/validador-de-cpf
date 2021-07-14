function validarCpf(cpf) {
    cpf = cpf.replace(/\D+/g, '');
    const cpfPadrao = Array.from(cpf);
    
    cpf = cpf.slice(0, -2);
    let cpfLimpo = Array.from(cpf);

    const calcular = (cpf, num) => {
        return cpf.reduce((ac, valor) => {
            ac += Number(valor) * num;
            num--;
            return ac;
        }, 0);
    }
    const gerarDigito = total => {
        let digito = 11 - (total % 11);
        if (digito > 9) digito = 0;
        return digito.toString();
    }

    cpfLimpo.push(gerarDigito(calcular(cpfLimpo, 10)));
    cpfLimpo.push(gerarDigito(calcular(cpfLimpo, 11)));

    return cpfLimpo.join() === cpfPadrao.join();
}
console.log(validarCpf('101.707.860-21'));