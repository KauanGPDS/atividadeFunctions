const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    sacar:function(x){
        const saque = {
            Tipo: "Saque",
            valor:x
        }
        if(this.saldo < saque.valor){
            console.log("Não foi possivel saca")
        }else{
            console.log("Saque Com Sucesso")
            this.saldo -= saque.valor
            this.historicos.push(`Saque de ${saque.valor}`)
        }
        
    },
    depositar:function(x){
        const deposito = {
            Tipo: "Deposito",
            valor:x
        }
        this.saldo += deposito.valor
        this.historicos.push(`Deposito de ${deposito.valor} `)
    },
    extrato:function(){
       console.log(`Dona da Conta:${this.nome} \n O saldo è ${this.saldo}\nO hisorico ${this.historicos}`)
    }
}

contaBancaria.depositar(10000000)
contaBancaria.sacar(1000)
contaBancaria.extrato()