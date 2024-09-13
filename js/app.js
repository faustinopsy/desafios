document.addEventListener("DOMContentLoaded", ()=>{
    const historicoCompras = [
        ["notebook", "mouse", "teclado"],
        ["smartphone", "capa de celular", "película"],
        ["notebook", "mochila", "mouse"],
        ["smartphone", "fones de ouvido", "capa de celular"],
        ["teclado", "mouse", "tapete de mouse"]
    ];
   
    const input = document.querySelector("#produto")
    const lista = document.querySelector("#lista")

    input.addEventListener("blur", (e)=>{
       const produto = e.target.value.toLowerCase();
       let text ='';

       const historico = historicoCompras.values();
       for (let item of historico) {
            if(item.includes(produto)){
                let index = item.indexOf(produto);
                item.splice(index,1)
                    text += item + "<br>";
            }
       }
         
        lista.innerHTML = `<b>Produtos recomendados:</b> <br>${text}`
    })
  
})