document.addEventListener("DOMContentLoaded", ()=>{
    const estoqueProdutos = [
        { nome: "arroz", quantidade: 10 },
        { nome: "feijão", quantidade: 8 },
        { nome: "óleo", quantidade: 5 },
        { nome: "macarrão", quantidade: 15 },
        { nome: "açúcar", quantidade: 7 }
    ];

    document.querySelector("#formVenda").addEventListener("submit", (e) => {
        e.preventDefault(); 
        const produto = document.querySelector("#produto").value.toLowerCase();
        const quantidadeVendida = parseInt(document.querySelector("#quantidade").value);
   
    const produtoEncontrado = estoqueProdutos.find(item => item.nome === produto);
        if (produtoEncontrado) {
            if (produtoEncontrado.quantidade < 5) {
                alertaBaixoEstoque(produtoEncontrado.nome);
                return true
            }
            if(quantidadeVendida > produtoEncontrado.quantidade){
                alertaBaixoEstoque(produtoEncontrado.nome);
                return true
            }
            produtoEncontrado.quantidade -= quantidadeVendida;
            exibirEstoque()
    }
    function exibirEstoque() {
        const lista = document.querySelector("#listaEstoque");
        lista.innerHTML = ""; 
        estoqueProdutos.forEach(produto => {
            lista.innerHTML += `<li>${produto.nome}: ${produto.quantidade} unidades</li>`;
        });
    }
    function alertaBaixoEstoque(nome){
        alert(`O produto ${nome} Está com quantida baixa no estoque`)
    }
    
});
  
})