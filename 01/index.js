const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

function correcaoProva(prova){
    for(let i =0;i<prova.questoes.length;i++){
        if(prova.questoes[i].resposta == prova.questoes[i].correta){
            console.log(`Acertou a ${i+1}`)

        }else{
            console.log("Errou a " + (i+1))
        }
    }
}
correcaoProva(prova)
console.log(prova.questoes[1].resposta)