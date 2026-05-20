let vinhos = [{
    nome: "Lorem",
    tipo: "Branco",
    safra: 1999,
    estoque: 0,
}];

function adicionarVinhos (){ 
    vinhos.push({
        nome: "LaVousire",
        tipo: "Tinto",
        safra: 1999,
        estoque: 4,
    });
    console.log(vinhos);
}
adicionarVinhos()

function listarVinhos (){
    vinhos.forEach((nome, indice )=>{
        console.log(`${indice}: ${nome} `)
    })
}
listarVinhos()

function mostrarVinhos () {
    const mostra = vinhos.filter(vinhos[3] <= 3 );
    console.log(mostra)
}
mostrarVinhos()


function calculaVinhos (){

}

calculaVinhos()

function nomesVinhos (){
    vinhos.map(nome);
    console.log(nome);
}
nomesVinhos()

