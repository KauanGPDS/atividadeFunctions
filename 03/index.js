const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],addItem:function(id,nome,qtd,precoUnit){
        const produto ={
            id,
            nome,
            qtd,
            precoUnit
        }
        carrinho.produtos.push(produto)
    },imprimirResumo:function(){
        let precogeral = 0
        for(let p = 0;p<this.produtos.length;p++){
           
            let precoTotal = (this.produtos[p].qtd * this.produtos[p].precoUnit);
            precogeral += precoTotal
            console.log(precogeral/100)
        }
    },desconto:function(){
        let precogeral = 0
       
       
            for(let i = 0;i<this.produtos.length;i++){
                let precoTotal = (this.produtos[i].qtd * this.produtos[i].precoUnit);
                precogeral += precoTotal
                let valorMinimo = Math.min(this.produtos[i].precoUnit)
            if(this.produtos.length >= 4){
                console.log("O item " + valorMinimo + " Saiu de graca")
                break
            }else if(precoTotal >= 100){
                console.log("Ganhou 10% de desconto")
                break
            }else{
                console.log("O desconto não foi aplicado")
                break
            }
            
        }
    
    
}
}


carrinho.addItem(1,"Tenis",2,120)
console.log(carrinho.produtos)
carrinho.imprimirResumo()
carrinho.desconto()