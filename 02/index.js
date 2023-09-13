const carro ={
    velocidade: 0,
    ligando:false,
    acelerar:function(){
        if(this.ligando){
            this.velocidade += 10
            console.log("A velocidade do carro é " + this.velocidade)
        }else{
            console.log("O carros esta desligado")
        }
        
    },
    ligar:function(){
        if(this.ligando){
            console.log("ligou o carro")
        }else{
            console.log("O carro esta ligando")
            this.ligando = true
        }
    },
    desligar:function(){
        if(this.ligando){
            console.log("o carro esta desligando")
            this.velocidade = 0
            this.ligando = false
        }else{
            console.log("O carro esta desligado")
        }
    }
}

carro.ligar()
carro.acelerar()
carro.acelerar()
carro.acelerar()
carro.acelerar()
carro.desligar()
carro.acelerar()